import React, { useEffect, useRef, useState } from 'react';
import { useMergeTagStore } from '../../store';
import type { MergeTag } from '../../types';
import { cn } from '../../lib/utils';

interface MergeTagDropdownProps {
  position: { top: number; left: number };
  onSelect: (tag: MergeTag) => void;
  onClose: () => void;
  searchQuery: string;
  tags?: MergeTag[];
}

export const MergeTagDropdown: React.FC<MergeTagDropdownProps> = ({
  position,
  onSelect,
  onClose,
  searchQuery,
  tags: propTags,
}) => {
  const { mergeTags: storeTags } = useMergeTagStore();
  const mergeTags = propTags || storeTags;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredTags = mergeTags.filter((tag) =>
    tag.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tag.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredTags.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredTags.length) % filteredTags.length);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (filteredTags[selectedIndex]) {
          onSelect(filteredTags[selectedIndex]);
        }
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredTags, selectedIndex, onSelect, onClose]);

  if (filteredTags.length === 0) return null;

  return (
    <div
      ref={dropdownRef}
      className="fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[200px] max-h-[300px] overflow-y-auto"
      onMouseDown={(e) => e.preventDefault()}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="p-2 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Merge Tags</span>
        <span className="text-[10px] text-gray-400">{filteredTags.length} found</span>
      </div>
      <div className="py-1">
        {filteredTags.map((tag, index) => (
          <button
            key={tag.id}
            className={cn(
              "w-full text-left px-3 py-2 text-sm flex flex-col gap-0.5 transition-colors",
              index === selectedIndex ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50 text-gray-700"
            )}
            onMouseDown={(e) => {
              e.preventDefault();
              onSelect(tag);
            }}
          >
            <span className="font-medium">{tag.label}</span>
            <span className="text-xs opacity-60 font-mono italic">{tag.value}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

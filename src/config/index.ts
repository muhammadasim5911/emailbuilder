import type { SubscriptionPlan } from '../types';

// Define subscription plans
export const SUBSCRIPTION_PLANS: Record<string, SubscriptionPlan> = {
  free: {
    id: 'free',
    name: 'Free',
    level: 'free',
    price: 0,
    currency: 'USD',
    maxTemplates: 3,
    maxMonthlyExports: 10,
    features: {
      advancedElements: false,
      advancedLayout: false,
      advancedStyling: false,
      proTemplates: false,
      bulkExport: false,
      integrations: false,
      analytics: false,
      teamManagement: false,
    },
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    level: 'pro',
    price: 29,
    currency: 'USD',
    maxTemplates: 100,
    maxMonthlyExports: 1000,
    features: {
      advancedElements: true,
      advancedLayout: true,
      advancedStyling: true,
      proTemplates: true,
      bulkExport: true,
      integrations: true,
      analytics: true,
      teamManagement: false,
    },
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    level: 'enterprise',
    price: 299,
    currency: 'USD',
    maxTemplates: -1,
    maxMonthlyExports: -1,
    features: {
      advancedElements: true,
      advancedLayout: true,
      advancedStyling: true,
      proTemplates: true,
      bulkExport: true,
      integrations: true,
      analytics: true,
      teamManagement: true,
    },
  },
};

// Export format options
export const EXPORT_FORMATS = [
  {
    id: 'html',
    label: 'HTML',
    description: 'Standard HTML email format',
    isFree: true,
  },
  {
    id: 'json',
    label: 'JSON',
    description: 'JSON data structure for storage',
    isFree: true,
  },
  {
    id: 'mjml',
    label: 'MJML',
    description: 'Responsive email markup language',
    isFree: false,
  },
  {
    id: 'amp',
    label: 'AMP for Email',
    description: 'Google AMP for Email format',
    isFree: false,
  },
];

// Default template sizes
export const TEMPLATE_SIZES = {
  mobile: { width: 320, label: 'Mobile' },
  tablet: { width: 600, label: 'Tablet' },
  desktop: { width: 1200, label: 'Desktop' },
};

// Element categories
export const ELEMENT_CATEGORIES = {
  content: {
    label: 'Content',
    description: 'Basic content elements',
    isFree: true,
  },
  layout: {
    label: 'Layout',
    description: 'Layout and structure',
    isFree: true,
  },
  advanced: {
    label: 'Advanced',
    description: 'Pro features',
    isFree: false,
  },
};

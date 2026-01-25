import React from 'react';
import { Button } from '../components/base';
import { useUserStore, useEditorStore } from '../store';
import { SUBSCRIPTION_PLANS } from '../config';

export const HomePage: React.FC<{
  onNavigate: (page: string) => void;
}> = ({ onNavigate }) => {
  const { currentUser } = useUserStore();
  const { createTemplate } = useEditorStore();

  const handleStartBuilding = () => {
    createTemplate(`Email Template ${new Date().toLocaleDateString()}`, 'New email template');
    onNavigate('editor');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              ✉️
            </div>
            <h1 className="text-2xl font-bold text-gray-900">EmailBuilder</h1>
          </div>
          <div className="flex items-center gap-4">
            {currentUser ? (
              <>
                <span className="text-sm text-gray-600">
                  {currentUser.name}
                  <span className="ml-2 inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {currentUser.plan.toUpperCase()}
                  </span>
                </span>
                <Button variant="secondary" size="sm" onClick={() => onNavigate('dashboard')}>
                  Dashboard
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="primary" size="sm">
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Build Beautiful Emails Easily
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Create professional email templates without coding. Drag, drop, and send.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleStartBuilding}
            className="mb-4"
          >
            Start Building Now
          </Button>
          <p className="text-sm text-gray-500">No credit card required</p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Drag & Drop Editor
            </h3>
            <p className="text-gray-600">
              Intuitive interface with drag and drop functionality. No coding skills needed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Mobile Responsive
            </h3>
            <p className="text-gray-600">
              Create emails that look great on all devices, phones, tablets, and desktops.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Fast & Reliable
            </h3>
            <p className="text-gray-600">
              Quick rendering, instant previews, and reliable exports to multiple formats.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pricing Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(SUBSCRIPTION_PLANS).map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl p-8 border-2 ${
                  plan.level === 'pro'
                    ? 'border-blue-600 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    Up to {plan.maxTemplates === -1 ? '∞' : plan.maxTemplates} templates
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    {plan.maxMonthlyExports === -1 ? 'Unlimited' : plan.maxMonthlyExports}{' '}
                    monthly exports
                  </li>
                  {plan.features.advancedElements && (
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      Advanced elements
                    </li>
                  )}
                  {plan.features.proTemplates && (
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      Pro templates
                    </li>
                  )}
                  {plan.features.integrations && (
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      Integrations
                    </li>
                  )}
                  {plan.features.analytics && (
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      Analytics
                    </li>
                  )}
                </ul>

                <Button
                  variant={plan.level === 'pro' ? 'primary' : 'secondary'}
                  fullWidth
                >
                  {plan.price === 0 ? 'Get Started' : 'Choose Plan'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 EmailBuilder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

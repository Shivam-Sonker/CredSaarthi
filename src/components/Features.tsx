import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    "Community-based trust models for credit assessment",
    "Social underwriting reduces default risk",
    "Accept BNPL, UPI Credit, and emerging payment products",
    "Instant payment acceptance infrastructure",
    "Scalable across Tier II-IV cities",
    "Capital efficient and sustainable model",
    "Built on India's existing digital payment rails",
    "Increased merchant conversion and retention"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Our Model Works
              </h2>
              <p className="text-xl text-blue-100">
                Built for India's unique market where trust trumps credit scores and digital infrastructure is ready.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-green-500 p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 group">
              <span>Join Our Network</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Your Balance</h3>
                    <span className="text-sm text-gray-500">INR</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">₹3,25,000</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-600 mb-1">Credit Access</div>
                      <div className="font-semibold text-gray-900">+₹85,000</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-600 mb-1">Sales Growth</div>
                      <div className="font-semibold text-gray-900">+35%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
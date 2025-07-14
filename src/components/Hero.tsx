import React from 'react';
import { ArrowRight, Shield, Zap, Users, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Rewiring How
                <span className="text-blue-600"> Small India</span>
                <br />
                Transacts & Grows
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Building an integrated credit and payment network for India's 60+ million small businesses. 
                Where community trust meets digital innovation to unlock growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">60M+</div>
                <div className="text-sm text-gray-600">Small Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Tier II-IV</div>
                <div className="text-sm text-gray-600">Cities Focus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Trust &gt; Score</div>
                <div className="text-sm text-gray-600">Our Model</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group">
                <span>Join Our Network</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Trust Model</h3>
                    <p className="text-gray-600">Social collateral ensures repayment through collective responsibility</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accept Any Credit</h3>
                    <p className="text-gray-600">BNPL, UPI Credit, and emerging payment products</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduced Default Risk</h3>
                    <p className="text-gray-600">Social underwriting and shared liability model</p>
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

export default Hero;
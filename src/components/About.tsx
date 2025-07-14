import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge financial solutions."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality of service to our customers."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Making financial services accessible to everyone across India."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In India, over 60 million small businesses operate with limited access to formal credit, 
            while their customers lack flexible payment options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Two-Sided Solution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Credit Access Side:</strong> We reduce default risk using social underwriting and shared liability, 
                where community-based trust models ensure repayment through collective social collateral.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Payment Side:</strong> We give merchants the infrastructure to instantly accept any form of credit—BNPL, 
                UPI Credit, and other emerging products—increasing conversion and customer retention.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This model is capital efficient, scalable across Tier II–IV cities, and built for a market where 
                trust matters more than credit scores and digital rails are already in place.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">60M+</div>
                <div className="text-gray-600">Underserved SMBs</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">Limited</div>
                <div className="text-gray-600">Credit Access</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We're not just bridging credit access—we're rewiring how small India transacts and grows. 
            By combining community trust with digital innovation, we're creating sustainable financial 
            inclusion that works for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
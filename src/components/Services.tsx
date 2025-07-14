import React from 'react';
import { CreditCard, Send, PiggyBank, TrendingUp, Smartphone, Globe, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Community Credit Access",
      description: "Social underwriting model that leverages community trust and shared liability to provide credit access.",
      color: "blue"
    },
    {
      icon: CreditCard,
      title: "Payment Acceptance Network",
      description: "Enable merchants to instantly accept BNPL, UPI Credit, and other emerging payment products.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "SMB Growth Solutions",
      description: "Integrated tools that help small businesses increase conversion and customer retention.",
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Digital Infrastructure",
      description: "Built on India's digital rails with UPI integration and mobile-first approach.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Tier II-IV Focus",
      description: "Scalable solutions designed specifically for smaller cities where traditional banking fails.",
      color: "pink"
    },
    {
      icon: PiggyBank,
      title: "Capital Efficient Model",
      description: "Sustainable approach that reduces risk while maximizing access to credit and payments.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From everyday banking to business solutions, we provide comprehensive financial services 
            designed to help you achieve your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className={`w-16 h-16 rounded-2xl ${getColorClasses(service.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
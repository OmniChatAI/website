import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { 
  Check,
  User,
  Building2,
  Shield
} from 'lucide-react';

const PricingCard = ({ type, icon: Icon, price, period, features, buttonText, buttonOnClick, isPopular }) => (
  <div className="rounded-2xl bg-gray-800/50 backdrop-blur-lg p-8 flex flex-col min-h-[600px]">
    <div className="text-center">
      <div className="flex justify-center mb-2">
        <Icon className={`h-6 w-6 ${type === "Personal" ? 'text-purple-400' : 'text-blue-400'}`} />
      </div>
      <h3 className="text-xl font-semibold text-white">{type}</h3>
      <div className="flex items-baseline justify-center mt-1 mb-1">
        <span className="text-2xl font-bold text-white">{price}</span>
        {period && <span className="text-gray-400 ml-1">{period}</span>}
      </div>
      {isPopular && (
        <span className="px-4 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 text-sm inline-block">
          Coming Soon
        </span>
      )}
    </div>
    
    <ul className="space-y-4 mt-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-gray-300">
          <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <div className="mt-8">
      <button 
        onClick={buttonOnClick}
        className={`w-full py-3 rounded-full flex items-center justify-center gap-2 ${
          type === "Enterprise" 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border border-white/10 text-white hover:bg-white/5'
        }`}
      >
        {type === "Enterprise" ? <Shield className="h-5 w-5" /> : <Building2 className="h-5 w-5" />}
        {buttonText}
      </button>
    </div>
  </div>
);

const FeatureComparison = () => (
  <div className="mt-24 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-white text-center mb-12">Feature Comparison</h2>
    
    <div className="rounded-xl overflow-hidden backdrop-blur-sm">
      <table className="w-full">
        <thead>
          <tr className="bg-white/5">
            <th className="px-6 py-4 text-left text-lg font-semibold text-white/80">Feature</th>
            <th className="px-6 py-4 text-left text-lg font-semibold text-white/80">Personal</th>
            <th className="px-6 py-4 text-left text-lg font-semibold text-white/80">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="px-6 py-4 text-left text-white text-md font-semibold bg-white/5" colSpan={3}>
              Usage
            </th>
          </tr>
          {[
            ["API Calls", "10,000/month", "Unlimited"],
            ["Rate Limit", "100/min", "1000+/min"],
            ["Models Access", "All models", "All models + Priority"],
          ].map(([feature, personal, enterprise], idx) => (
            <tr key={idx} className="border-t border-white/5">
              <td className="px-6 py-4 text-sm text-white">{feature}</td>
              <td className="px-6 py-4 text-sm text-white/60">{personal}</td>
              <td className="px-6 py-4 text-sm text-blue-400">{enterprise}</td>
            </tr>
          ))}
          
          <tr>
            <th className="px-6 py-4 text-left text-white text-md font-semibold bg-white/5" colSpan={3}>
              Support
            </th>
          </tr>
          {[
            ["Response Time", "24 hours", "< 4 hours"],
            ["Support Channel", "Email", "Dedicated slack"],
            ["Technical Support", "Standard", "Priority"],
          ].map(([feature, personal, enterprise], idx) => (
            <tr key={idx} className="border-t border-white/5">
              <td className="px-6 py-4 text-sm text-white">{feature}</td>
              <td className="px-6 py-4 text-sm text-white/60">{personal}</td>
              <td className="px-6 py-4 text-sm text-blue-400">{enterprise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PricingPage = () => {
  useEffect(() => {
    document.title = 'Pricing | OmniChat';
  }, []);

  const plans = {
    personal: {
      type: "Personal",
      price: "$20",
      period: "/month",
      icon: User,
      features: [
        "Start with 500 free API calls",
        "10,000 API calls per month",
        "100 requests per minute",
        "Access to all AI models",
        "Email support",
        "Basic analytics",
        "REST API access",
        "Community updates"
      ],
      buttonText: "Join Waitlist",
      isPopular: true
    },
    enterprise: {
      type: "Enterprise",
      price: "Custom",
      period: "",
      icon: Building2,
      features: [
        "Unlimited API calls",
        "Custom rate limits (1000+ rpm)",
        "Access to all AI models",
        "Priority model access",
        "24/7 priority support",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantees",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  };
  
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            Choose the perfect plan for your needs with our straightforward pricing options
          </p>
          <div className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-6 py-2 mt-4">
            <p className="text-white">
              🎁 Start with <span className="text-purple-400 font-semibold">500 free API calls</span> - No credit card required
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            {...plans.personal}
            buttonOnClick={() => window.location.href = 'https://ykd9exkz62v.typeform.com/to/iiyBuH1f'}
          />
          <PricingCard
            {...plans.enterprise}
            buttonOnClick={() => window.location.href = 'mailto:sales@tryomni.chat'}
          />
        </div>

        {/* Feature Comparison */}
        <FeatureComparison />
      </div>
    </div>
  );
};

export default PricingPage;
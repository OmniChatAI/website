import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { 
  Code,
  Github,
  Blocks,
  Key,
  Cpu,
  Rocket,
  CheckCircle,
  Terminal
} from 'lucide-react';

const SetupPage = () => {
  useEffect(() => {
    document.title = 'Setup | OmniChat';
  }, []);

  const benefits = [
    {
      title: "Simple Integration",
      description: "Easy-to-use REST API with comprehensive documentation and client libraries.",
      icon: <Code className="w-12 h-12 text-blue-400" />
    },
    {
      title: "Open Source Clients",
      description: "Access our collection of open-source client applications and examples.",
      icon: <Github className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Multiple Platforms",
      description: "Use our API with web apps, chat bots, or any platform that can make HTTP requests.",
      icon: <Blocks className="w-12 h-12 text-green-400" />
    }
  ];

  const steps = [
    {
      title: "Get Your API Key",
      description: "Sign up for an API key to start using OmniChat in your applications.",
      icon: <Key className="w-12 h-12 text-blue-400" />,
      points: [
        "Create an account on our platform",
        "Choose your pricing plan",
        "Generate your API key"
      ]
    },
    {
      title: "Choose Your Integration",
      description: "Select from our open-source clients or integrate directly with our API.",
      icon: <Cpu className="w-12 h-12 text-yellow-400" />,
      points: [
        "Use our official client libraries",
        "Try our open-source example apps",
        "Direct REST API integration"
      ]
    },
    {
      title: "Start Building",
      description: "Build powerful AI features into your applications with just a few lines of code.",
      icon: <Rocket className="w-12 h-12 text-green-400" />,
      points: [
        "Follow our quickstart guide",
        "Check out code examples",
        "Join our developer community"
      ]
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            Integrate AI Into Your Apps
          </span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-12 text-white/80">
          Get started with OmniChat's powerful API and open-source client applications
        </p>
      </div>

      {/* Benefits Grid */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Setup Steps */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="flex items-center mb-6">
                {step.icon}
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-white/70 mt-2">{step.description}</p>
                </div>
              </div>
              <div className="ml-20 space-y-3">
                {step.points.map((point, idx) => (
                  <div key={idx} className="flex items-center text-white/80">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
          <div className="flex flex-col items-center">
            <Terminal className="w-16 h-16 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
            <p className="text-white/80 mb-8 max-w-2xl">
              Explore our documentation, example applications, and developer resources.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://docs.tryomni.chat"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center justify-center"
              >
                <Terminal className="mr-2" /> View Documentation
              </a>
              <a
                href="https://github.com/chaitanyarahalkar/omnichat-examples"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
              >
                <Github className="mr-2" /> Example Apps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetupPage;

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  Layers, 
  PenTool, 
  Star,
  Cpu,
  MessageCircle,
  Image,
  Bot,
  Brain,
  Video,
  CloudLightning,
  Laugh,
  Code
} from 'lucide-react';

const FeaturesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Features | OmniChat';
  }, []);

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
            Universal API Features
          </span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-12 text-white/80">
          Build powerful AI applications with our comprehensive multimodal LLM interface API
        </p>
      </div>

      {/* Main Features Grid */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* API Integration */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Code className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold">Easy Integration</h3>
            </div>
            <p className="text-white/70 mb-4">
              Simple and powerful API that can be integrated into any platform or application with minimal setup.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                RESTful API endpoints
              </li>
              <li className="flex items-center">
                <Bot className="w-4 h-4 mr-2" />
                Multiple platform SDKs
              </li>
            </ul>
          </div>

          {/* Multimodal Processing */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Bot className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-semibold">Multimodal Processing</h3>
            </div>
            <p className="text-white/70 mb-4">
              Process and analyze multiple types of media through a single unified interface.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Image className="w-4 h-4 mr-2" />
                Image & video analysis
              </li>
              <li className="flex items-center">
                <Video className="w-4 h-4 mr-2" />
                Audio transcription & processing
              </li>
            </ul>
          </div>

          {/* Platform Support */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Globe className="w-10 h-10 text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold">Platform Support</h3>
            </div>
            <p className="text-white/70 mb-4">
              Ready-to-use integrations for popular platforms and example implementations.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Telegram & Slack bots
              </li>
              <li className="flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                Web & mobile apps
              </li>
            </ul>
          </div>

          {/* Smart AI Selection */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Brain className="w-10 h-10 text-red-400 mr-4" />
              <h3 className="text-2xl font-semibold">Smart AI Selection</h3>
            </div>
            <p className="text-white/70 mb-4">
              Intelligent routing of requests to the most suitable AI model based on the input type and task.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                Automatic model selection
              </li>
              <li className="flex items-center">
                <Bot className="w-4 h-4 mr-2" />
                Multi-model orchestration
              </li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Code className="w-10 h-10 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold">Developer Tools</h3>
            </div>
            <p className="text-white/70 mb-4">
              Comprehensive documentation, SDKs, and example implementations to get you started quickly.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                API documentation
              </li>
              <li className="flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                Example projects
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Start Building with OmniChat</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Try our API through the Telegram bot demo, or dive into the documentation to start building your own integration.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
            >
              <MessageCircle className="mr-2" /> Try Demo Bot
            </a>
            <a 
              href="https://github.com/chaitanyarahalkar/omnichat" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
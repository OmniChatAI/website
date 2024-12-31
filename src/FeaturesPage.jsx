import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { 
  Brain,
  Bot,
  Target,
  Settings,
  Layers,
  Zap,
  Globe,
  Code,
  Image,
  MessageCircle,
  Cpu,
  Sparkles
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
            Autonomous AI Agent Features
          </span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-12 text-white/80">
          Build powerful autonomous applications with our agentic AI that thinks, decides, and acts independently
        </p>
      </div>

      {/* Main Features Grid */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Autonomous Decision Making */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Brain className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold">Autonomous Decisions</h3>
            </div>
            <p className="text-white/70 mb-4">
              AI agents that make independent decisions based on context, goals, and learned patterns.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Goal-oriented reasoning
              </li>
              <li className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Contextual understanding
              </li>
            </ul>
          </div>

          {/* Adaptive Learning */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Settings className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-semibold">Adaptive Learning</h3>
            </div>
            <p className="text-white/70 mb-4">
              Agents that continuously learn and improve from each interaction and experience.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Experience-based improvement
              </li>
              <li className="flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                Pattern recognition
              </li>
            </ul>
          </div>

          {/* Proactive Actions */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Zap className="w-10 h-10 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold">Proactive Actions</h3>
            </div>
            <p className="text-white/70 mb-4">
              AI agents that take initiative and act autonomously when opportunities or needs arise.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Bot className="w-4 h-4 mr-2" />
                Autonomous execution
              </li>
              <li className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Task prioritization
              </li>
            </ul>
          </div>

          {/* Multimodal Understanding */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Globe className="w-10 h-10 text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold">Multimodal Intelligence</h3>
            </div>
            <p className="text-white/70 mb-4">
              Agents that understand and process multiple types of input for comprehensive decision making.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Image className="w-4 h-4 mr-2" />
                Visual understanding
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Natural language processing
              </li>
            </ul>
          </div>

          {/* Seamless Integration */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Code className="w-10 h-10 text-red-400 mr-4" />
              <h3 className="text-2xl font-semibold">Easy Integration</h3>
            </div>
            <p className="text-white/70 mb-4">
              Deploy autonomous agents into your applications with our simple yet powerful API.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                RESTful endpoints
              </li>
              <li className="flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                Multiple platform SDKs
              </li>
            </ul>
          </div>

          {/* Advanced Reasoning */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-6">
              <Sparkles className="w-10 h-10 text-indigo-400 mr-4" />
              <h3 className="text-2xl font-semibold">Advanced Reasoning</h3>
            </div>
            <p className="text-white/70 mb-4">
              Sophisticated decision-making capabilities powered by advanced AI models.
            </p>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Complex problem solving
              </li>
              <li className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Strategic planning
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Experience Autonomous AI Today</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Try our autonomous AI agents through our demo, or start building your own intelligent applications.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => window.open('https://t.me/crchatgptbot', '_blank')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
            >
              <Bot className="mr-2" /> Try AI Agent
            </button>
            <button 
              onClick={() => navigate('/setup')}
              className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
            >
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
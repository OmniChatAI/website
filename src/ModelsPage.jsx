import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { 
  Brain,
  Sparkles,
  Image as ImageIcon,
  Search,
  Code,
  Lightbulb,
  Bot,
  Target
} from 'lucide-react';

const ModelsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Models | OmniChat';
  }, []);

  const models = [
    {
      name: "Autonomous Agents",
      icon: <Target className="w-10 h-10 text-red-400" />,
      description: "Advanced agentic layer that enables models to think and act independently",
      capabilities: [
        "Autonomous decision making",
        "Independent task execution",
        "Self-directed learning",
        "Proactive problem solving",
        "Strategic planning"
      ],
      color: "red"
    },
    {
      name: "GPT-4o",
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      description: "Latest GPT-4 model optimized for chat and reasoning",
      capabilities: [
        "Complex reasoning and analysis",
        "Natural conversation",
        "Code generation and review",
        "Custom personality adaptation"
      ],
      color: "blue"
    },
    {
      name: "DALL-E 3",
      icon: <ImageIcon className="w-10 h-10 text-purple-400" />,
      description: "Advanced image generation model with high fidelity and accuracy",
      capabilities: [
        "Photorealistic image generation",
        "Artistic style adaptation",
        "Complex scene composition",
        "Text-to-image conversion"
      ],
      color: "purple"
    },
    {
      name: "Google Gemini",
      icon: <Sparkles className="w-10 h-10 text-green-400" />,
      description: "Multimodal AI model for diverse task handling",
      capabilities: [
        "Image and text understanding",
        "Cross-modal reasoning",
        "Complex task solving",
        "Real-world knowledge integration"
      ],
      color: "green"
    },
    {
      name: "Perplexity.ai",
      icon: <Search className="w-10 h-10 text-yellow-400" />,
      description: "Real-time web browsing and information retrieval",
      capabilities: [
        "Live web search",
        "Current events analysis",
        "Fact verification",
        "Source citation"
      ],
      color: "yellow"
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
      <div className="relative container mx-auto px-4 pt-24 pb-8 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            Intelligent Model Selection
          </span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-white/80 mb-4">
            Our smart routing system automatically selects and combines the perfect AI models for your task.
            Whether you need autonomous agents, image generation, or text analysis, OmniChat ensures optimal results
            by choosing the right model combination in real-time.
          </p>
          <div className="flex items-center justify-center space-x-4 my-8">
            <Target className="w-12 h-12 text-red-400" />
            <Brain className="w-12 h-12 text-purple-400" />
            <Bot className="w-12 h-12 text-green-400" />
          </div>
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
              <Code className="mr-2" /> Setup Guide
            </button>
          </div>
        </div>
      </div>

      {/* Models Grid */}
      <section className="relative container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-8 text-center">Available Models & Agents</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="flex items-center mb-6">
                {model.icon}
                <h3 className="text-2xl font-semibold ml-4">{model.name}</h3>
              </div>
              <p className="text-white/70 mb-6">
                {model.description}
              </p>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white/90">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {model.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-white/70">
                      <Lightbulb className={`w-4 h-4 mr-2 text-${model.color}-400`} />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModelsPage;

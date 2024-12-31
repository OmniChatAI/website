import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Globe, 
  PenTool, 
  Cpu, 
  MessageCircle, 
  Bot, 
  Code, 
  Brain, 
  Search 
} from 'lucide-react';
import FeaturesPage from './FeaturesPage';
import ModelsPage from './ModelsPage';
import SetupPage from './SetupPage';
import TeamPage from './TeamPage';
import PricingPage from './PricingPage';
import BlogPage from './BlogPage';

// Main website content component
const MainContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'OmniChat | Universal Multimodal LLM API';
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>
      
      <Navbar />

      {/* Hero Section */}
      <header className="relative container mx-auto px-4 pt-20 md:pt-32 pb-12 md:pb-16 text-center">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
              One API, All Senses, True Agency
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-white/80 px-4">
            Build autonomous applications with AI that sees, hears, understands, and acts independently.
            Our universal API combines multimodal intelligence with true agentic behavior.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 px-4">
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
              <Code className="mr-2" /> Explore API
            </button>
          </div>
          <a 
            href="https://www.producthunt.com/posts/omnichat?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-omnichat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=653153&theme=neutral" 
              alt="OmniChat - Your Autonomous AI Agent Companion | Product Hunt" 
              style={{ width: '250px', height: '54px' }}
              width="250" 
              height="54" 
            />
          </a>
        </div>
      </header>

      {/* Features Grid */}
      <section className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Cpu className="w-8 h-8 text-blue-400 mr-3" />
              Autonomous Agents
            </h3>
            <p className="text-white/70">
              Deploy AI agents that operate independently, make decisions, and execute tasks autonomously.
              Perfect for automation, customer service, and complex workflows.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <Globe className="w-8 h-8 text-purple-400 mr-3" />
              Agentic Intelligence
            </h3>
            <p className="text-white/70">
              Our AI agents possess human-like reasoning, understanding context and intent to make informed decisions.
              They learn, adapt, and improve with each interaction.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
              <PenTool className="w-8 h-8 text-green-400 mr-3" />
              Seamless Integration
            </h3>
            <p className="text-white/70">
              Easily integrate autonomous AI agents into your applications. Our API handles the complexity,
              you focus on building amazing experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            Transform Your Applications with Agentic AI
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
              <MessageCircle className="w-6 h-6 text-blue-400 mr-2" />
              Customer Service
            </h3>
            <p className="text-white/70">
              Deploy autonomous agents that understand customer needs, make decisions, and resolve issues independently.
              Our agents learn from each interaction to provide better service over time.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
              <Bot className="w-6 h-6 text-purple-400 mr-2" />
              Process Automation
            </h3>
            <p className="text-white/70">
              Let AI agents handle complex workflows autonomously. From data processing to decision-making,
              our agents streamline operations with intelligent automation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
              <Brain className="w-6 h-6 text-green-400 mr-2" />
              Content Intelligence
            </h3>
            <p className="text-white/70">
              Empower your applications with agents that understand, analyze, and generate content across multiple modalities.
              Perfect for content moderation, generation, and analysis.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
              <Search className="w-6 h-6 text-yellow-400 mr-2" />
              Research & Analysis
            </h3>
            <p className="text-white/70">
              Deploy agents that independently gather information, verify facts, and provide comprehensive insights.
              Ideal for research automation and data analysis tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Telegram Start Section */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Experience Autonomous AI in Action</h3>
              <p className="text-white/80 mb-4">
                See how our agentic AI operates in real-time through our Telegram integration.
                Watch as it understands context, makes decisions, and takes action autonomously.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://t.me/crchatgptbot" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center"
                >
                  <MessageCircle className="mr-2" /> Try AI Agent
                </a>
                <a 
                  href="https://docs.tryomni.chat" 
                  className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors flex items-center"
                >
                  View API Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative container mx-auto px-4 py-8 mt-12 text-center">
        <p className="text-white/50">
          © {new Date().getFullYear()} OmniChat. Building the future of autonomous AI agents.
        </p>
      </footer>
    </div>
  );
};

// Root App component with router
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;

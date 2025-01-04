import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { 
  Code, 
  Brain,
  Bot,
  Rocket,
  Mail,
  Globe
} from 'lucide-react';

const CareersPage = () => {
  useEffect(() => {
    document.title = 'Careers | OmniChat';
  }, []);

  const [expandedJob, setExpandedJob] = useState(null);

  const openings = [
    {
      title: "Full Stack Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Join us in building the future of autonomous AI agents. We're looking for a Full Stack Engineer who is passionate about AI and can help us scale our infrastructure.",
      requirements: [
        "3+ years of experience with React and modern JavaScript",
        "Experience with Node.js and API development",
        "Understanding of AI/ML concepts is a plus",
        "Strong problem-solving skills and attention to detail",
        "Excellent communication skills and ability to work in a remote team",
        "Experience with cloud platforms (AWS/GCP) is preferred"
      ],
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    {
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Help us push the boundaries of what's possible with autonomous AI agents. We're seeking an AI/ML Engineer to work on our core agent technology.",
      requirements: [
        "Strong background in machine learning and deep learning",
        "Experience with LLMs and transformer architectures",
        "Proficiency in Python and ML frameworks (PyTorch/TensorFlow)",
        "Research experience in NLP or computer vision is a plus",
        "Track record of delivering ML systems in production",
        "Experience with distributed systems and scalable ML pipelines"
      ],
      icon: <Brain className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <header className="relative container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            Join Our Mission
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8">
          Help us build the future of autonomous AI agents and transform how software thinks and acts
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Bot className="w-12 h-12 text-blue-400" />
          <Rocket className="w-12 h-12 text-purple-400" />
          <Brain className="w-12 h-12 text-green-400" />
        </div>
      </header>

      {/* Open Positions */}
      <section className="relative container mx-auto px-4 py-16">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Open Positions
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {openings.map((job, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                className={`w-full bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/[0.15] transition-all flex items-center justify-between ${expandedJob === index ? 'rounded-t-xl border-b-0' : 'rounded-xl'}`}
              >
                <div className="flex items-center">
                  {job.icon}
                  <h3 className="text-2xl font-semibold ml-3">{job.title}</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">{job.type}</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">{job.location}</span>
                  <svg 
                    className={`w-6 h-6 transform transition-transform ${expandedJob === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {expandedJob === index && (
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 border-t-0 rounded-b-xl p-8">
                  <p className="text-white/70 mb-6">{job.description}</p>
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2 text-white/70">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => window.location.href = 'mailto:careers@tryomni.chat'}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center justify-center"
                  >
                    <Mail className="mr-2" /> Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="relative container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Why Join OmniChat?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/[0.15] transition-all group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-blue-400">Mission-Driven</h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Be part of a team that's pushing the boundaries of AI technology and creating autonomous agents that will transform how we interact with software.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/[0.15] transition-all group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-purple-400">Remote-First</h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Work from anywhere in the world. We believe in hiring the best talent, regardless of location, and enabling flexible work arrangements.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/[0.15] transition-all group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-green-400">Growth & Learning</h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Access to cutting-edge AI technology and continuous learning opportunities. We invest heavily in our team's professional development.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/[0.15] transition-all group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-yellow-400">Competitive Benefits</h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Competitive salary, equity options, flexible work hours, and a supportive, inclusive work environment focused on well-being.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage; 
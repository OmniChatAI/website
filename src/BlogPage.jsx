import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Tag, ArrowLeft } from 'lucide-react';
import { blogPosts } from './content/blogPosts';

// Custom components for markdown rendering
const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  // Add custom styling for other markdown elements
  h1: ({children}) => <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">{children}</h1>,
  h2: ({children}) => <h2 className="text-3xl font-bold mt-12 mb-6 text-white">{children}</h2>,
  h3: ({children}) => <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">{children}</h3>,
  p: ({children}) => <p className="text-white/80 mb-6 leading-relaxed">{children}</p>,
  ul: ({children}) => <ul className="mb-6 text-white/80 space-y-3">{children}</ul>,
  ol: ({children}) => <ol className="list-decimal ml-6 mb-6 text-white/80 space-y-3">{children}</ol>,
  li: ({children, ordered}) => (
    <li className="flex items-start">
      <span className="text-blue-400 mr-3 mt-1">{ordered ? '' : '•'}</span>
      <span className="flex-1">{children}</span>
    </li>
  ),
  a: ({href, children}) => (
    <a 
      href={href} 
      className="text-blue-400 hover:text-blue-300 transition-colors underline"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({children}) => (
    <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-white/70">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-white/20" />,
};

const BlogPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = postId ? 'Blog Post | OmniChat' : 'Blog | OmniChat';
  }, [postId]);

  const post = postId ? blogPosts.find(p => p.id === postId) : null;

  if (postId && !post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      <Navbar />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        {post ? (
          // Single Post View
          <article className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center text-white/70 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </button>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-white/60">{post.date}</span>
              <div className="flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                <Tag className="w-4 h-4 mr-2" />
                {post.category}
              </div>
            </div>
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={components}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        ) : (
          // Blog List View
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
                Newsroom
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-16">
              Stay updated with the latest news, product updates, and insights from the OmniChat team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1100px] mx-auto">
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer flex flex-col md:flex-col"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="w-full h-[200px] md:h-[240px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative flex items-center justify-center">
                    <img 
                      src="/logo512.png" 
                      alt="OmniChat"
                      className="w-24 md:w-32 h-24 md:h-32 object-contain opacity-50"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-blue-400 font-medium uppercase">
                        {post.category}
                      </div>
                      <div className="text-sm text-white/60">{post.date}</div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">{post.title}</h2>
                    <p className="text-white/70 line-clamp-2 md:line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage; 
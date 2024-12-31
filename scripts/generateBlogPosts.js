const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Paths
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/content/blogPosts.js');

// Read all markdown files from the blog directory
const generateBlogPosts = () => {
  try {
    // Create directories if they don't exist
    if (!fs.existsSync(BLOG_DIR)) {
      fs.mkdirSync(BLOG_DIR, { recursive: true });
    }

    // Read all markdown files
    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'));
    
    // Process each file
    const blogPosts = files.map(file => {
      const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      const { data, content: markdownContent } = matter(content);
      const id = path.basename(file, '.md');
      
      return {
        id,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        content: markdownContent
      };
    });

    // Sort posts by date (newest first)
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate the JavaScript file content
    const fileContent = `// This file is auto-generated. Do not edit directly.
export const blogPosts = ${JSON.stringify(blogPosts, null, 2)};
`;

    // Write to blogPosts.js
    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log('Successfully generated blogPosts.js');

  } catch (error) {
    console.error('Error generating blog posts:', error);
    process.exit(1);
  }
};

generateBlogPosts(); 
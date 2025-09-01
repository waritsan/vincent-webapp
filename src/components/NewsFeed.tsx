import React, { useState, useEffect } from 'react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  author: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
}

// Mock news data
const mockNewsData: NewsItem[] = [
  {
    id: 1,
    title: "AI Revolution in Web Development",
    summary: "Artificial Intelligence is transforming how we build web applications, with new tools and frameworks emerging daily.",
    author: "Sarah Johnson",
    publishedAt: "2025-09-01T10:30:00Z",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "React 19 Features You Should Know",
    summary: "The latest version of React brings exciting new features including improved server components and enhanced performance.",
    author: "Mike Chen",
    publishedAt: "2025-08-31T14:15:00Z",
    category: "React",
    imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "TypeScript Best Practices in 2025",
    summary: "Learn the most effective ways to use TypeScript in modern web applications for better code quality and maintainability.",
    author: "Emily Rodriguez",
    publishedAt: "2025-08-30T09:45:00Z",
    category: "TypeScript",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Tailwind CSS: The Future of Styling",
    summary: "Why utility-first CSS frameworks are becoming the standard for modern web development teams.",
    author: "David Kim",
    publishedAt: "2025-08-29T16:20:00Z",
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
  },
  {
    id: 5,
    title: "Building Scalable Apps with Vite",
    summary: "Discover how Vite's lightning-fast build tool is revolutionizing the development experience for modern web applications.",
    author: "Lisa Wang",
    publishedAt: "2025-08-28T11:30:00Z",
    category: "Build Tools",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
  }
];

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(mockNewsData.map(item => item.category)))];

  useEffect(() => {
    // Simulate API call
    const fetchNews = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNews(mockNewsData);
      setLoading(false);
    };

    fetchNews();
  }, []);

  const filteredNews = selectedCategory === 'All' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Latest News
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Stay updated with the latest developments in tech
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* News Items */}
      <div className="space-y-6">
        {filteredNews.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {item.imageUrl && (
              <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {item.category}
                </span>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(item.publishedAt)}
                </time>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
                {item.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {item.summary}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {item.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.author}
                  </span>
                </div>
                
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors">
                  Read more →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No articles found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;

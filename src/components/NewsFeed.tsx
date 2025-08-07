import { Search, Bell, Heart, MessageCircle, Share } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  author: string;
  time: string;
  image: string;
  likes: number;
  comments: number;
  category: string;
}

const NewsFeed = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Revolutionary AI Breakthrough Changes Everything",
      summary: "Scientists have developed a new AI system that can understand and generate human-like responses with unprecedented accuracy.",
      author: "Sarah Johnson",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      likes: 124,
      comments: 32,
      category: "Technology"
    },
    {
      id: 2,
      title: "Climate Change: New Solutions Emerge",
      summary: "Innovative green technologies are showing promising results in reducing carbon emissions worldwide.",
      author: "Mike Chen",
      time: "4 hours ago",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=200&fit=crop",
      likes: 89,
      comments: 15,
      category: "Environment"
    },
    {
      id: 3,
      title: "Space Exploration Reaches New Milestone",
      summary: "NASA's latest mission reveals fascinating discoveries about potential life on distant planets.",
      author: "Dr. Lisa Park",
      time: "6 hours ago",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=200&fit=crop",
      likes: 256,
      comments: 67,
      category: "Science"
    },
    {
      id: 4,
      title: "Health Tech Revolution in Progress",
      summary: "New wearable devices are transforming how we monitor and maintain our health in real-time.",
      author: "Alex Rodriguez",
      time: "8 hours ago",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      likes: 178,
      comments: 43,
      category: "Health"
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">News Feed</h1>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* News Items */}
      <div className="flex-1 overflow-y-auto pb-20">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white mb-2 mx-4 mt-4 rounded-lg shadow-sm border border-gray-200">
            {/* Article Header */}
            <div className="p-4 pb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {item.summary}
              </p>
              <div className="text-xs text-gray-500">
                By {item.author}
              </div>
            </div>

            {/* Article Image */}
            <div className="px-4 pb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Interaction Bar */}
            <div className="px-4 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart size={18} />
                    <span className="text-sm">{item.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-sm">{item.comments}</span>
                  </button>
                </div>
                <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Share size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;

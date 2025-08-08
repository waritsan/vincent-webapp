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
      title: "ลงทะเบียนรับเงินเยียวยาผู้ประสบภัยน้ำท่วม",
      summary: "ประกันสังคมเปิดให้ลงทะเบียนเริ่มตั้งแต่วันนี้เื่อรับเงินเยียวยส 20,000 บาท.",
      author: "สำนักงานประกันสังคม",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=400&h=200&fit=crop",
      likes: 124,
      comments: 32,
      category: "เงินเยียวยา"
    },
    {
      id: 2,
      title: "ยื่นภาษีครึ่งปีนิติบุคคล ภ.ง.ด.51",
      summary: "เงินได้นิติบุคคลสำหรับครึ่งรอบระยะเวลาบัญชีโดยบริษัทหรือ ห้างหุ้นส่วนนิติบุคคลต้องยื่นแบบภ.ง.ด.51เพื่อรายงานรายได้และคำนวณภาษีที่คาดว่าจะต้องจ่ายของครึ่งรอบระยะเวลาบัญชี",
      author: "กรมสรรพากร",
      time: "3 hours ago",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop",
      likes: 178,
      comments: 43,
      category: "ลดหย่อนภาษี"
    },
    {
      id: 3,
      title: "โครงการสินเชื่อที่อยู่อาศัยฯ",
      summary: "ปัจจุบันโครงการสินเชื่อที่อยู่อาศัยฯ ธนาคารอยู่ระหว่างการพิจารณาอนุมัติสินเชื่อ ทั้งนี้ หากคิวที่อยู่ระหว่างการพิจารณาไม่ผ่านการอนุมัติของธนาคาร สำนักงานประกันสังคมจะเรียกคิวสำรองเพิ่มเติมในระยะถัดไป",
      author: "สำนักงานประกันสังคม",
      time: "4 hours ago",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=200&fit=crop",
      likes: 89,
      comments: 15,
      category: "สินเชื่อ"
    },
    {
      id: 4,
      title: "โครงการสินเชื่อเพื่อส่งเสริมการจ้างงาน",
      summary: "สถานประกอบการที่สนใจเข้าร่วมโครงการสินเชื่อเพื่อส่งเสริมการจ้างงาน ระยะที่ 3 (พ.ศ. 2568 – 2569) สามารถขอรับหนังสือรับรองเพื่อประกอบการขอสินเชื่อ ได้ตั้งแต่วันที่ 3 กรกฎาคม 2568 เป็นต้นไป",
      author: "สำนักงานประกันสังคม",
      time: "6 hours ago",
      image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=400&h=200&fit=crop",
      likes: 256,
      comments: 67,
      category: "สินเชื่อ"
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Project Vincent</h1>
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

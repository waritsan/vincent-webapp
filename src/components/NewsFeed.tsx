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
  url: string;
}

const NewsFeed = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "โครงการสินเชื่อที่อยู่อาศัยฯ",
      summary: "ปัจจุบันโครงการสินเชื่อที่อยู่อาศัยฯ ธนาคารอยู่ระหว่างการพิจารณาอนุมัติสินเชื่อ ทั้งนี้ หากคิวที่อยู่ระหว่างการพิจารณาไม่ผ่านการอนุมัติของธนาคาร สำนักงานประกันสังคมจะเรียกคิวสำรองเพิ่มเติมในระยะถัดไป",
      author: "สำนักงานประกันสังคม",
      time: "1 hour ago",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=200&fit=crop",
      likes: 89,
      comments: 15,
      category: "สินเชื่อ",
      url: "https://www.sso.go.th/wpr/main/news/ข่าวประชาสัมพันธ์_detail_detail_1_16_0/ปัจจุบันโครงการสินเชื่อที่อยู่อาศัยฯ-ธนาคารอยู่ระหว่างการพิจารณาอนุมัติสินเชื่อ-ทั้งนี้-หากคิวที่อยู่ระหว่างการพิจารณาไม่ผ่านการอนุมัติของธนาคาร-สำนักงานประกันสังคมจะเรียกคิวสำรองเพิ่มเติมในระยะถัดไป33257_ปัจจุบันโครงการสินเชื่อที่อยู่อาศัยฯ%20ธนาคารอยู่ระหว่างการพิจารณาอนุมัติสินเชื่อ%20ทั้งนี้%20หากคิวที่อยู่ระหว่างการพิจารณาไม่ผ่านการอนุมัติของธนาคาร%20สำนักงานประกันสังคมจะเรียกคิวสำรองเพิ่มเติมในระยะถัดไป_33257"
    },
    {
      id: 2,
      title: "โครงการสินเชื่อเพื่อส่งเสริมการจ้างงาน",
      summary: "สถานประกอบการที่สนใจเข้าร่วมโครงการสินเชื่อเพื่อส่งเสริมการจ้างงาน ระยะที่ 3 (พ.ศ. 2568 – 2569) สามารถขอรับหนังสือรับรองเพื่อประกอบการขอสินเชื่อ ได้ตั้งแต่วันที่ 3 กรกฎาคม 2568 เป็นต้นไป",
      author: "สำนักงานประกันสังคม",
      time: "2 hours ago",
      image: "https://www.sso.go.th/wpr/Upload/sso/2025-07-019966.png?w=400&h=200&fit=crop",
      likes: 256,
      comments: 67,
      category: "สินเชื่อ",
      url: "https://www.sso.go.th/wpr/main/news/ข่าวประชาสัมพันธ์_detail_detail_1_16_0/สถานประกอบการที่สนใจเข้าร่วมโครงการสินเชื่อเพื่อส่งเสริมการจ้างงาน-ระยะที่-3-พศ-2568-%EF%BF%BD%EF%BF%BD-2569-สามารถขอรับหนังสือรับรองเพื่อประกอบการขอสินเชื่อ-ได้ตั้งแต่วันที่-3-กรกฎาคม-2568-เป็นต้นไป32922_สถานประกอบการที่สนใจเข้าร่วมโครงการสินเชื่อเพื่อส่งเสริมการจ้างงาน%20ระยะที่%203%20(พ.ศ.%202568%20–%202569)%20สามารถขอรับหนังสือรับรองเพื่อประกอบการขอสินเชื่อ%20ได้ตั้งแต่วันที่%203%20กรกฎาคม%202568%20เป็นต้นไป_32922"
    },
    {
      id: 3,
      title: "ยื่นภาษีครึ่งปีนิติบุคคล ภ.ง.ด.51",
      summary: "เงินได้นิติบุคคลสำหรับครึ่งรอบระยะเวลาบัญชีโดยบริษัทหรือ ห้างหุ้นส่วนนิติบุคคลต้องยื่นแบบภ.ง.ด.51เพื่อรายงานรายได้และคำนวณภาษีที่คาดว่าจะต้องจ่ายของครึ่งรอบระยะเวลาบัญชี",
      author: "กรมสรรพากร",
      time: "3 hours ago",
      image: "https://www.rd.go.th/fileadmin/user_upload/lorkhor/newsbanner/2025/08/pnd_51.jpg?w=400&h=200&fit=crop",
      likes: 178,
      comments: 43,
      category: "ลดหย่อนภาษี",
      url: "https://www.rd.go.th/fileadmin/user_upload/lorkhor/newsbanner/2025/08/pnd_51.jpg"
    },
  ];

  const handleNewsItemClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
          <div 
            key={item.id} 
            className="bg-white mb-2 mx-4 mt-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleNewsItemClick(item.url)}
          >
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
                  <button 
                    className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart size={18} />
                    <span className="text-sm">{item.likes}</span>
                  </button>
                  <button 
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm">{item.comments}</span>
                  </button>
                </div>
                <button 
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
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

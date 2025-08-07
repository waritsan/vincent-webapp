import { useState } from 'react';
import { Send, Plus, Menu, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  time: string;
  sender: 'user' | 'assistant';
  isTyping?: boolean;
}

interface Chat {
  id: number;
  title: string;
  lastMessage: string;
  time: string;
  messages: Message[];
}

const ChatScreen = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messageText, setMessageText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const chats: Chat[] = [
    {
      id: 1,
      title: "New Chat",
      lastMessage: "How can I help you today?",
      time: "now",
      messages: [
        {
          id: 1,
          text: "Hello! I'm your AI assistant. How can I help you today?",
          time: "2:30 PM",
          sender: 'assistant'
        }
      ]
    },
    {
      id: 2,
      title: "React Development Tips",
      lastMessage: "Great question about hooks!",
      time: "1h ago",
      messages: [
        {
          id: 1,
          text: "Can you explain React hooks to me?",
          time: "1:30 PM",
          sender: 'user'
        },
        {
          id: 2,
          text: "React hooks are functions that let you use state and other React features in functional components. The most common ones are useState for managing state and useEffect for side effects.",
          time: "1:31 PM",
          sender: 'assistant'
        }
      ]
    },
    {
      id: 3,
      title: "Mobile App Design",
      lastMessage: "Here are some mobile design principles...",
      time: "2h ago",
      messages: [
        {
          id: 1,
          text: "What are the best practices for mobile app design?",
          time: "12:30 PM",
          sender: 'user'
        },
        {
          id: 2,
          text: "Here are some key mobile app design principles:\n\n1. **Mobile-first approach** - Design for the smallest screen first\n2. **Touch-friendly interfaces** - Ensure buttons are at least 44px\n3. **Simple navigation** - Use bottom tabs or hamburger menus\n4. **Fast loading** - Optimize images and minimize animations\n5. **Consistent design** - Follow platform guidelines (iOS/Android)",
          time: "12:31 PM",
          sender: 'assistant'
        }
      ]
    }
  ];

  const currentChat = chats.find(chat => chat.id === selectedChat);

  const handleSendMessage = async () => {
    if (messageText.trim() && currentChat) {
      // In a real app, you'd add the user message to the chat state
      console.log('Sending message:', messageText);
      
      setMessageText('');
      setIsTyping(true);

      // Simulate AI typing delay
      setTimeout(() => {
        setIsTyping(false);
        // Add AI response (in a real app, you'd call your AI service)
      }, 1500);
    }
  };

  const startNewChat = () => {
    const newChatId = Date.now();
    setSelectedChat(newChatId);
    setShowSidebar(false);
  };

  if (!selectedChat || !currentChat) {
    return (
      <div className="flex flex-col h-full bg-white">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to AI Chat</h2>
            <p className="text-gray-600 mb-6">Start a conversation with your AI assistant</p>
            <button
              onClick={startNewChat}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start New Chat
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            >
              <Menu size={20} className="text-gray-600" />
            </button>
            <h2 className="font-semibold text-gray-900 truncate">{currentChat.title}</h2>
          </div>
          <button
            onClick={startNewChat}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">New</span>
          </button>
        </div>
      </div>

      {/* Sidebar overlay for mobile */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setShowSidebar(false)}>
          <div className="bg-white w-80 h-full p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900">Chat History</h3>
              <button onClick={() => setShowSidebar(false)} className="p-1">
                ✕
              </button>
            </div>
            <div className="space-y-2">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => {
                    setSelectedChat(chat.id);
                    setShowSidebar(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    selectedChat === chat.id ? 'bg-blue-50 border border-blue-200' : ''
                  }`}
                >
                  <div className="font-medium text-gray-900 truncate">{chat.title}</div>
                  <div className="text-sm text-gray-500 truncate">{chat.lastMessage}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="max-w-3xl mx-auto space-y-6">
          {currentChat.messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.sender === 'assistant' && (
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">AI</span>
                </div>
              )}
              <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white ml-auto'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                </div>
                <p className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {message.time}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-gray-600" />
                </div>
              )}
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">AI</span>
              </div>
              <div className="bg-gray-100 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Message AI assistant..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none max-h-32 min-h-[48px]"
                rows={1}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                style={{ height: 'auto' }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!messageText.trim()}
              className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;

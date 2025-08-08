import { useState } from 'react'
import BottomNavigation from './components/BottomNavigation'
import NewsFeed from './components/NewsFeed'
import ChatScreen from './components/ChatScreen'
import MenuScreen from './components/MenuScreen'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('news')

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'news':
        return <NewsFeed />
      case 'chat':
        return <ChatScreen />
      case 'menu':
        return <MenuScreen />
      default:
        return <NewsFeed />
    }
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        {renderActiveScreen()}
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App

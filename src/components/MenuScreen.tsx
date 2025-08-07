import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  HelpCircle, 
  Info, 
  LogOut,
  ChevronRight,
  Moon,
  Globe,
  Smartphone
} from 'lucide-react';

const MenuScreen = () => {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  };

  const menuSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Profile", action: () => console.log('Profile') },
        { icon: Settings, label: "Settings", action: () => console.log('Settings') },
        { icon: Bell, label: "Notifications", action: () => console.log('Notifications') },
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: Moon, label: "Dark Mode", action: () => console.log('Dark Mode'), toggle: true },
        { icon: Globe, label: "Language", action: () => console.log('Language'), subtitle: "English" },
        { icon: Smartphone, label: "App Preferences", action: () => console.log('App Preferences') },
      ]
    },
    {
      title: "Support",
      items: [
        { icon: Shield, label: "Privacy & Security", action: () => console.log('Privacy') },
        { icon: HelpCircle, label: "Help & Support", action: () => console.log('Help') },
        { icon: Info, label: "About", action: () => console.log('About') },
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-900">Menu</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* User Profile Section */}
        <div className="bg-white mx-4 mt-4 rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">{userProfile.name}</h2>
              <p className="text-sm text-gray-600">{userProfile.email}</p>
              <button className="mt-2 text-sm text-blue-600 font-medium hover:text-blue-700">
                View Profile
              </button>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mx-4 mt-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3 px-2">
              {section.title}
            </h3>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={item.action}
                  className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                    itemIndex !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <item.icon size={20} className="text-gray-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{item.label}</p>
                      {item.subtitle && (
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.toggle && (
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          defaultChecked={false}
                        />
                        <div className="w-10 h-6 bg-gray-300 rounded-full transition-colors cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full shadow transform transition-transform translate-x-1 translate-y-1"></div>
                        </div>
                      </div>
                    )}
                    {!item.toggle && (
                      <ChevronRight size={16} className="text-gray-400" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Statistics Section */}
        <div className="mx-4 mt-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3 px-2">
            Your Activity
          </h3>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">1,234</p>
                <p className="text-sm text-gray-600">News Read</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">567</p>
                <p className="text-sm text-gray-600">Messages Sent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="mx-4 mt-6 mb-6">
          <button
            onClick={() => console.log('Sign out')}
            className="w-full bg-white border border-red-200 rounded-lg p-4 hover:bg-red-50 transition-colors"
          >
            <div className="flex items-center justify-center gap-3">
              <LogOut size={20} className="text-red-600" />
              <span className="font-medium text-red-600">Sign Out</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;

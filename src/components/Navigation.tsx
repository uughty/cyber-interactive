import React from 'react';

interface NavItem {
  name: string;
  ref: React.RefObject<HTMLElement>;
  id: string;
  icon?: React.ComponentType; // optional since your map doesn't use icon now
}

interface NavigationProps {
  navItems: NavItem[];
  activeSection: string;
  scrollToSection: (ref: React.RefObject<HTMLElement>, sectionName: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ navItems, activeSection, scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/40x40/E0E7FF/4F46E5?text=LOGO"
            alt="Company Logo"
            className="w-10 h-10 rounded-full shadow-md"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://placehold.co/40x40/cccccc/000000?text=LOGO";
            }}
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Cyber Interactive Ltd
          </h1>
        </div>
        <ul className="flex space-x-8 text-sm font-medium">
          {navItems.map(({ name, ref, id }) => (
            <li key={name}>
              <button
                onClick={() => scrollToSection(ref, id)}
                className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:text-blue-600 ${
                  activeSection === id ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {name}
                {activeSection === id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

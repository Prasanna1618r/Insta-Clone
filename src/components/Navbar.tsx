import React from 'react';
import { Home, Search, PlusSquare, Heart, User, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b fixed w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Instagram className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold hidden sm:block">Instagram</span>
          </div>

          {/* Search */}
          <div className="hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            <Home className="navIcon" />
            <PlusSquare className="navIcon" />
            <Heart className="navIcon" />
            <User className="navIcon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
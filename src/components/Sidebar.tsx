import React from 'react';
import { Home, Search, Bell, Mail, BookMarked, ListTodo, Users, BadgeCheck, User, MoreHorizontal } from 'lucide-react';
import { Link } from './Link';
import { ThemeToggle } from './ThemeToggle';

export function Sidebar() {
  const menuItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: Search, text: 'Explore', path: '/explore' },
    { icon: Bell, text: 'Notifications', path: '/notifications' },
    { icon: Mail, text: 'Messages', path: '/messages' },
    { icon: ListTodo, text: 'Lists', path: '/lists' },
    { icon: BookMarked, text: 'Bookmarks', path: '/bookmarks' },
    { icon: Users, text: 'Communities', path: '/communities' },
    { icon: BadgeCheck, text: 'Verified', path: '/verified' },
    { icon: User, text: 'Profile', path: '/profile' },
    { icon: MoreHorizontal, text: 'More', path: '/more' }
  ];

  return (
    <div className="fixed h-screen w-64 border-r border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between p-2">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-gray-900 dark:text-white">
            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <ThemeToggle />
        </div>
        
        {menuItems.map((item) => (
          <Link key={item.text} Icon={item.icon} text={item.text} path={item.path} />
        ))}
        
        <button className="w-full rounded-full bg-blue-500 py-3 text-white font-bold hover:bg-blue-600 transition">
          Post
        </button>
      </div>
    </div>
  );
}
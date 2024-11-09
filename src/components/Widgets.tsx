import React from 'react';
import { Search } from 'lucide-react';

export function Widgets() {
  const trends = [
    { category: 'Technology', title: 'React 19', tweets: '25.4K' },
    { category: 'Sports', title: '#WorldCup2026', tweets: '44K' },
    { category: 'Entertainment', title: 'New Movie Release', tweets: '15.2K' },
    { category: 'Politics', title: 'Election Updates', tweets: '88.5K' },
  ];

  const suggestions = [
    { name: 'Tech News', handle: '@technews', avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80' },
    { name: 'Startup Hub', handle: '@startups', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80' },
  ];

  return (
    <div className="w-80 p-4 space-y-4">
      <div className="sticky top-0 pt-2">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 dark:bg-gray-800 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-700 dark:text-white transition-colors"
          />
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Trends for you</h2>
        <div className="space-y-4">
          {trends.map((trend) => (
            <div key={trend.title} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition-colors">
              <p className="text-sm text-gray-500 dark:text-gray-400">{trend.category}</p>
              <p className="font-bold dark:text-white">{trend.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{trend.tweets} posts</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Who to follow</h2>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.handle} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={suggestion.avatar} alt={suggestion.name} className="h-12 w-12 rounded-full" />
                <div>
                  <p className="font-bold dark:text-white">{suggestion.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{suggestion.handle}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Widgets } from './components/Widgets';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        <main className="flex-1 ml-64">
          <div className="flex">
            <div className="flex-1 max-w-2xl">
              <Feed />
            </div>
            <div className="hidden lg:block">
              <Widgets />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
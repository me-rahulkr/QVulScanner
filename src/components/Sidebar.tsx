import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 h-screen">
      <h2 className="text-xl font-bold mb-4">QVulScanner</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 block">Dashboard</a>
        </li>
        <li className="mb-2">
          <a href="#" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 block">Analytics</a>
        </li>
        <li className="mb-2">
          <a href="#" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 block">Settings</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
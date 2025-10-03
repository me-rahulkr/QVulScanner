import React from 'react';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 p-4 border-b dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Welcome Back!</h1>
        <div className="flex items-center gap-4">
          <div>User Profile</div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
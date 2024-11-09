import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LinkProps {
  Icon: LucideIcon;
  text: string;
  path: string;
}

export function Link({ Icon, text, path }: LinkProps) {
  return (
    <a 
      href={path}
      className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
    >
      <Icon className="h-6 w-6" />
      <span className="text-xl">{text}</span>
    </a>
  );
}
import React from 'react';

interface LinkItemProps {
  href: string;
  label: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label }) => {
  return (
    <a
      href={href.startsWith('http') ? href : `https://${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {label}
    </a>
  );
};

export default LinkItem;

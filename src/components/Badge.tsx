import React from 'react';

interface BadgeProps {
  name: string;
  color?: string;
  isOwner?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ name, color = 'blue', isOwner = false }) => {
  const bg = isOwner
    ? 'bg-gradient-to-r from-red-500 to-pink-600'
    : `bg-${color}-500`;

  return (
    <span className={`text-white text-xs px-2 py-1 rounded-full ${bg} shadow inline-block mr-2 mb-2`}>
      {isOwner ? '👑 Owner' : name}
    </span>
  );
};

export default Badge;

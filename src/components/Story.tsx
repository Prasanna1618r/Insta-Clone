import React from 'react';

interface StoryProps {
  username: string;
  imageUrl: string;
}

const Story: React.FC<StoryProps> = ({ username, imageUrl }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-purple-600">
        <img
          className="rounded-full p-[2px] bg-white"
          src={imageUrl}
          alt={username}
        />
      </div>
      <span className="text-xs truncate w-16 text-center">{username}</span>
    </div>
  );
};

export default Story;
import React from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

const Post: React.FC<PostProps> = ({ username, userImage, image, caption, likes }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <img
          src={userImage}
          alt={username}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="ml-3 font-semibold">{username}</span>
      </div>

      {/* Post Image */}
      <img src={image} alt="Post content" className="w-full" />

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <Heart className="h-6 w-6 cursor-pointer hover:text-red-500" />
            <MessageCircle className="h-6 w-6 cursor-pointer hover:text-blue-500" />
            <Share className="h-6 w-6 cursor-pointer hover:text-green-500" />
          </div>
          <Bookmark className="h-6 w-6 cursor-pointer hover:text-yellow-500" />
        </div>

        {/* Likes */}
        <p className="font-semibold mb-2">{likes.toLocaleString()} likes</p>

        {/* Caption */}
        <p>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
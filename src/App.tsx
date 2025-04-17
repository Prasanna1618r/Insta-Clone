import React from 'react';
import Navbar from './components/Navbar';
import Story from './components/Story';
import Post from './components/Post';

function App() {
  // Sample data
  const stories = [
    { username: 'johndoe', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    { username: 'janedoe', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { username: 'mike_smith', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    { username: 'sarah.j', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
  ];

  const posts = [
    {
      username: 'johndoe',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=800&fit=crop',
      caption: 'Beautiful sunset at the beach! 🌅 #sunset #beach #vibes',
      likes: 1234,
    },
    {
      username: 'janedoe',
      userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&h=800&fit=crop',
      caption: 'Coffee time ☕️ #coffee #morning',
      likes: 856,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <main className="max-w-5xl mx-auto pt-16 px-4">
        {/* Stories */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 mt-6 overflow-x-auto">
          <div className="flex space-x-4">
            {stories.map((story, index) => (
              <Story key={index} {...story} />
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="max-w-2xl mx-auto">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
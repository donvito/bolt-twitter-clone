import React from 'react';
import { Image, Smile, Calendar, MapPin, FileImage, MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

export function Feed() {
  const tweets = [
    {
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "John Doe",
      handle: "@johndoe",
      verified: true,
      time: "2h",
      content: "Just launched my new project! 🚀\n\nBuilt with React, TypeScript, and Tailwind CSS. Check it out: https://project.com",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      likes: 842,
      retweets: 122,
      replies: 58
    },
    {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sarah Parker",
      handle: "@sarahp",
      verified: false,
      time: "4h",
      content: "Just finished reading 'The Pragmatic Programmer'. Highly recommend for all developers! 📚\n\nKey takeaways:\n• Learn one new language every year\n• Don't repeat yourself\n• Make it work, make it right, make it fast",
      likes: 1283,
      retweets: 244,
      replies: 89
    },
    {
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Tech Weekly",
      handle: "@techweekly",
      verified: true,
      time: "6h",
      content: "🔥 Breaking: Major AI breakthrough announced!\n\nResearchers have developed a new neural network architecture that reduces training time by 50% while improving accuracy by 30%.",
      likes: 2891,
      retweets: 1244,
      replies: 432
    }
  ];

  return (
    <div className="border-l border-r border-gray-200 dark:border-gray-800 min-h-screen">
      <div className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 p-4">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Profile" 
              className="h-12 w-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <textarea 
              placeholder="What is happening?!"
              className="w-full resize-none border-none focus:ring-0 text-xl bg-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              rows={2}
            />
            <div className="flex items-center justify-between pt-4">
              <div className="flex space-x-4">
                <button className="text-blue-500 hover:text-blue-600">
                  <Image className="h-5 w-5" />
                </button>
                <button className="text-blue-500 hover:text-blue-600">
                  <FileImage className="h-5 w-5" />
                </button>
                <button className="text-blue-500 hover:text-blue-600">
                  <Smile className="h-5 w-5" />
                </button>
                <button className="text-blue-500 hover:text-blue-600">
                  <Calendar className="h-5 w-5" />
                </button>
                <button className="text-blue-500 hover:text-blue-600">
                  <MapPin className="h-5 w-5" />
                </button>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </div>
    </div>
  );
}

interface TweetProps {
  avatar: string;
  name: string;
  handle: string;
  verified: boolean;
  time: string;
  content: string;
  image?: string;
  likes: number;
  retweets: number;
  replies: number;
}

function Tweet({ avatar, name, handle, verified, time, content, image, likes, retweets, replies }: TweetProps) {
  return (
    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <div className="flex space-x-4">
        <img src={avatar} alt={name} className="h-12 w-12 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold hover:underline cursor-pointer dark:text-white">{name}</span>
            {verified && (
              <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
              </svg>
            )}
            <span className="text-gray-500 dark:text-gray-400">{handle}</span>
            <span className="text-gray-500 dark:text-gray-400">·</span>
            <span className="text-gray-500 dark:text-gray-400 hover:underline cursor-pointer">{time}</span>
          </div>
          <p className="mt-2 whitespace-pre-wrap dark:text-white">{content}</p>
          {image && (
            <img 
              src={image} 
              alt="Tweet content" 
              className="mt-3 rounded-2xl border border-gray-200 dark:border-gray-700 max-h-96 object-cover w-full"
            />
          )}
          <div className="mt-4 flex justify-between text-gray-500 dark:text-gray-400 max-w-md">
            <button className="flex items-center space-x-2 group">
              <MessageCircle className="h-5 w-5 group-hover:text-blue-500" />
              <span className="group-hover:text-blue-500">{replies}</span>
            </button>
            <button className="flex items-center space-x-2 group">
              <Repeat2 className="h-5 w-5 group-hover:text-green-500" />
              <span className="group-hover:text-green-500">{retweets}</span>
            </button>
            <button className="flex items-center space-x-2 group">
              <Heart className="h-5 w-5 group-hover:text-red-500" />
              <span className="group-hover:text-red-500">{likes}</span>
            </button>
            <button className="flex items-center space-x-2 group">
              <Share className="h-5 w-5 group-hover:text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
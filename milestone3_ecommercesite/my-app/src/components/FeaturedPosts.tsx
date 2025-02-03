import React from 'react';
import Image from 'next/image';

export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      src: '/assets/PinkCar.png',
      alt: 'Post 1',
      title: 'Featured Post 1',
      description: 'Brief description of post 1.',
    },
    {
      id: 2,
      src: '/assets/ColourfulColony.png',
      alt: 'Post 2',
      title: 'Featured Post 2',
      description: 'Brief description of post 2.',
    },
    {
      id: 3,
      src: '/assets/Umbrella.jpg',
      alt: 'Post 3',
      title: 'Featured Post 3',
      description: 'Brief description of post 3.',
    },
  ];

  return (
    <section className="px-6 sm:px-12 lg:px-24 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#252B42]">Featured Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform duration-300 transform hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={post.src}
                alt={post.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-[#252B42]">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

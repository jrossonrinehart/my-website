// Portfolio.js
import React from 'react';
import Card from './Card';
const Portfolio = () => {
  // Sample portfolio data (you can replace this with your own projects)
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description of Project 1.',
      imageUrl: 'https://placeimg.com/400/500/tech', // Taller image size
    },
    {
      title: 'Project 2',
      description: 'This is the description of Project 2.',
      imageUrl: 'https://placeimg.com/400/500/business', // Taller image size
    },
  ];

  return (
    <div className="container mx-auto py-8 mt-0">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md w-full md:w-auto h-full md:h-auto">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover rounded-md md:h-auto" // Adjust the image size
            />
            <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
            
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

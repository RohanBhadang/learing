
import React from 'react';

export default function Skills() {

  const skillsList = [
    {  name: 'HTML' },
    {  name: 'CSS' },
    { name: 'JavaScript' },
    {  name: 'React.js' },
    {  name: 'Node.js' },
    { name: 'Express.js' },
    {  name: 'MongoDB' },
    {  name: 'Git' },
    {  name: 'GitHub' },
    {  name: 'Socket.io' },
    {  name: 'RESTful APIs' },
    {  name: 'Vercel' },
    {  name: 'Render' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center text-center p-4 bg-gray-50">
      <div>
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600">
          Here are some of the technologies and tools I'm proficient with.
        </p>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {skillsList.map(skill => (
            <div
              key={skill.name}
              className="bg-orange-200 shadow-md hover:shadow-lg hover:scale-125 transition-transform  duration-200 p-4 px-6 rounded-lg font-medium text-lg"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
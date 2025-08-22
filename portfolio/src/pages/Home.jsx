import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showMore, setShowMore] = useState(false);

 
  useEffect(() => {
    alert("The Home component has mounted! 🚀");
    console.log("Home component mounted at:")
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-white">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700 mb-6">
          I'm a passionate Full-Stack Developer with a love for creating dynamic and user-friendly web applications.
        </p>
        
        {showMore && (
          <div className="text-left text-gray-600 space-y-4 transition-all duration-500">
            <p>
              My journey in web development started with a deep curiosity for how things work on the internet. This led me to learn a variety of technologies, from front-end frameworks like React to back-end services with Node.js and Express.
            </p>
            <p>
              I enjoy tackling complex problems and turning ideas into reality. This portfolio showcases some of the projects I've worked on, highlighting my skills in building responsive layouts, managing application state, and working with databases.
            </p>
          </div>
        )}

        <button 
          onClick={toggleShowMore} 
          className="mt-8 bg-orange-400 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-500 transition-colors duration-300"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        <div className="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <img 
    src="https://images.unsplash.com/photo-1606973583553-4d4ce5e80580?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="Your Description" 
    className="w-full h-auto object-cover rounded-xl"
  />
</div>
      </div>
    </section>
  );
};

export default Home;
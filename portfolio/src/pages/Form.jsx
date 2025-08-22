import React, { useRef, useState } from 'react';

const NotFound = () => {
  // Uncontrolled
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  //  Controlled
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleControlledChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    console.log("🟡 Uncontrolled Data:", {
      name: nameRef.current.value,
      email: emailRef.current.value
    });
    e.target.reset();
  };

  const handleControlledSubmit = (e) => {
    e.preventDefault();
    console.log("🔵 Controlled Data:", formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 flex flex-col items-center gap-10">
      
      <h1 className="text-4xl font-bold text-pink-600 mb-4 animate-bounce">
         fill the form plz
      </h1>

      // Uncontrolled Form 
      <form 
        onSubmit={handleUncontrolledSubmit} 
        className="bg-white border-4 border-dashed border-yellow-400 shadow-lg rounded-xl p-6 w-96 hover:rotate-1 transition-all"
      >
        <h2 className="text-xl font-semibold mb-4 text-yellow-600">🟡 Uncontrolled Form</h2>

        <input
          type="text"
          ref={nameRef}
          placeholder="Enter Funny Name 😂"
          className="mb-3 w-full p-2 border-2 border-yellow-300 rounded-full text-sm"
        />

        <input
          type="email"
          ref={emailRef}
          placeholder="Email (Optional 🤷‍♂️)"
          className="mb-4 w-full p-2 border-2 border-yellow-300 rounded-full text-sm"
        />

        <button 
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition-all"
        >
          🚀 Submit Uncontrolled
        </button>
      </form>

    //controll
<form 
  onSubmit={handleControlledSubmit} 
  className="bg-white border-4 border-dashed border-purple-400 shadow-lg rounded-xl p-6 w-96 hover:-rotate-1 transition-all"
>
  <h2 className="text-xl font-semibold mb-4 text-purple-600">🔵 Controlled Form</h2>

  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleControlledChange}
    placeholder="Type Controlled Name 🎯"
    className="mb-3 w-full p-2 border-2 border-purple-300 rounded-full text-sm"
  />

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleControlledChange}
    placeholder="Email here 📨"
    className="mb-4 w-full p-2 border-2 border-purple-300 rounded-full text-sm"
  /> 

  <button 
    type="submit"
    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all"
  >
    🎉 Submit Controlled
  </button>
</form>


<div className="bg-purple-50 border border-purple-300 p-4 w-96 mt-2 rounded-lg text-sm text-purple-800 shadow">
  <p>✍️ <strong>Typing Name:</strong> {formData.name || "..."}</p>
  <p>📥 <strong>Typing Email:</strong> {formData.email || "..."}</p>
</div>

    </div>
  );
};

export default NotFound;

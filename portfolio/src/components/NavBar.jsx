import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  function Skills()
  {
    navigate("/skills");
  }

  return (
    <nav className="bg-orange-300 shadow p-4 sticky top-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-black hover:text-600">My Progress</Link>
        <div>
          <Link to="/" className="p-2">Home</Link>
          <button onClick={Skills} className="p-2">Skills</button>
          <Link to="/portfolio" className="p-2">Work</Link>
          <Link to="/notfound" className="p-2">form</Link>
        <Link to="/movie" className="hover:underline"> Movies</Link>
        </div>
      </div>
    </nav>
  );
}

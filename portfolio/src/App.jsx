import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Movie from './pages/Movie';         
import MovieDetail from './pages/MovieDetail'
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import NotFound from './pages/Form';


function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie/>} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Context from './Context'

function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/movies')
      .then((res) => res.json())
      .then((data) => { setMovieData(data) })
  }, [])

  return (
    <div className="App">
      <Context.Provider value={{ movieData, setSearchTerm }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div >
  );
}

export default App;

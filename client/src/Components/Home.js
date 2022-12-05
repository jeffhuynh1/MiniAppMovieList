import '../App.css';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Context from '../Context';

function Home() {
    const { movieData } = useContext(Context);
    const movieList = movieData.map((movie) =>
        <li key={movie.id}> {movie.title}</li>
    )

    return (
        <div className="Home">
            <ul>{movieList}</ul>
        </div>
    )
}

export default Home;
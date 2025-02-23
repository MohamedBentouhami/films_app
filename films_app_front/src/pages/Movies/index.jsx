import React from 'react'
import MovieCard from '../../components/MovieCard.jsx';
import {useMovies } from '../../context/MovieContext.jsx';
import "./style.css";


function MoviesPage() {
    const { movies, isLoading, error } = useMovies();

    return (
        <div>
            {isLoading ?
                <p>Loading</p> :
                <div className='movies'>
                    {movies.map((movie) => <MovieCard movie={movie} key={movie.id}></MovieCard>)}
                </div>}
        </div>
    )
}

export default MoviesPage
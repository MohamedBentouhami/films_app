import React from 'react'
import { fetchMovies } from '../../services/movies.service.jsx'
import MovieCard from '../../components/MovieCard.jsx';
import "./style.css";


function MoviesPage() {
    const { movies, isLoading } = fetchMovies();

    return (
        <div><h1>Movies Page</h1>
            {isLoading ? <p>Loading</p> : <div className='movies'> {movies.map((movie) => <MovieCard movie={movie} key={movie.id}></MovieCard>)} </div>}
        </div>
    )
}

export default MoviesPage
import React from 'react'
import { useFetchMovies } from '../../services/movies.service.jsx'
import MovieCard from '../../components/MovieCard.jsx';
import "./style.css";


function MoviesPage() {
    const { movies, isLoading } = useFetchMovies();

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
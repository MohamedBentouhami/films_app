import React from 'react'
import { fetchMovies } from '../services/movies.service.jsx'

function MoviesPage() {
    const {movies, isLoading } = fetchMovies();
    if(!isLoading){
        console.log(movies)
    }
  return (
    <div><h1>Movies Page</h1>
    </div>
  )
}

export default MoviesPage
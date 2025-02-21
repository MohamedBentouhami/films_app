import React from 'react'
import MovieRankedCard from '../../components/MovieRankedCard.jsx';
import { fetchMovies } from '../../services/movies.service.jsx';
import "./style.css"

function TopMoviePage() {
    const { movies, isLoading } = fetchMovies();

    // TODO context instead of two fetch
    return (
        <div>
            {isLoading ? <p>Loading</p> :
                <table>
                    <thead>
                        <tr>
                        <th>Ranking</th>
                        <th>Title</th>
                        <th>Rate</th>
                        </tr>

                    </thead>
                    <tbody>
                     {movies
                    .sort((a, b) => b.rating - a.rating)
                    .map((movie, index) =>
                        <MovieRankedCard key={movie.id} movie={movie} index={index}></MovieRankedCard>)}
                    </tbody>
                </table>}
        </div>)
}

export default TopMoviePage
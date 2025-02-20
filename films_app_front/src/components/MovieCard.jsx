import React from 'react'

function MovieCard({ movie }) {
    return (
        <div className='movie-card'>
            <h3>
                {movie.name}
            </h3>
        </div>
    )
}

export default MovieCard
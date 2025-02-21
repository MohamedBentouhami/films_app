import React from 'react'

function MovieRankedCard({ movie, index }) {
    return (
        <tr
            className='movie-ranked'>
            <td>{index + 1}</td>
            <td>{movie.name}</td>
            <td>{movie.rating}</td>
        </tr>
    )
}

export default MovieRankedCard;
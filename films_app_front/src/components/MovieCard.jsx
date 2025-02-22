import React from "react";

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={movie.url_img} alt={movie.name} className="movie-image" />
            <h3 className="movie-title">{movie.name}</h3>
            <p><strong>Category:</strong> {movie.Category}</p>
            <p><strong>Duration:</strong> {movie.duration} min</p>
            <p> <strong>Release Year:</strong> {new Date(movie.release_date).getFullYear()}</p>
        </div>
    );
}

export default MovieCard;

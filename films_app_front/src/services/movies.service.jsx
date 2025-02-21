import { useEffect, useState } from "react";
const API_URL = "http://localhost:8080/api/movies";

export function fetchMovies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setMovies(data);
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    return { movies, isLoading };

}

export function fetchMoviesRated(){

}


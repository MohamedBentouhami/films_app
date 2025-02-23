import { createContext, useContext, useEffect, useState } from "react";
import { fetchMovies } from "../services/movies.service.jsx";


const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadMovies() {
            try {
                const data = await fetchMovies();
                setMovies(data)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        loadMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ movies, isLoading, error }}>
            {children}
        </MovieContext.Provider>);
}

export function useMovies(){
    return useContext(MovieContext);
}
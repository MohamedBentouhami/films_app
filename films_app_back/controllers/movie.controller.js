import express from "express";
import movieRepository from "../repositories/movie.repository.js";

/**
 * @callback ExpressCallback
 * @param {express.Request} req
 * @param {express.Response} res
 */
/**
 * User Controller
 * @type {Object<string, ExpressCallback>}
 */
const movieController = {
    getAll: async (req, res) => {
        const movies = await movieRepository.getAll();
        res.json(movies);
    },
    addMovie: async (req, res) => {
        console.log(req.body);
        const { name, description, release_date, duration, category_id, rating } = req.body;
        const movie = {
            name,
            description,
            release_date,
            duration,
            category_id,
            rating
        }
        await movieRepository.addMovie(movie);
        res.json("Object added successfully! ")
    },
    getMovie: async (req, res) => {
        const { id } = req.params;
        const movie = await movieRepository.getById(id);
        res.json(movie);
    },
    updateMovie: async (req, res) => {
        const { id, name, description, release_date, duration, category_id, rating } = req.body;
        const movie = {
            name,
            description,
            release_date,
            duration,
            category_id,
            rating
        }
        await movieRepository.update(id, movie);
        res.json("Object updated successfully! ")
    },
    deleteMovie: async (req, res) => {
        const { id } = req.params;
        await movieRepository.delete(id);
        return res.json("Movie deleted! ")
    }

}

export default movieController;
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
    }
}

export default movieController;
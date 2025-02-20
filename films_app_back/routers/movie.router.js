import { Router } from "express";
import movieController from "../controllers/movie.controller.js";

const movieRouter = Router();

movieRouter.get("/", movieController.getAll);
movieRouter.post("/addMovie", movieController.addMovie);
movieRouter.route("/:id")
    .get(movieController.getMovie)
    .put(movieController.updateMovie)
    .delete(movieController.deleteMovie);

export default movieRouter;

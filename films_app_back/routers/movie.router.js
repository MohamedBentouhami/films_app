import { Router } from "express";
import movieController from "../controllers/movie.controller.js";

const movieRouter = Router();

movieRouter.get("/", movieController.getAll);
// movieRouter.post("/addMovie", movieController.addMovie);
// movieRouter.route("/:id")
//     .get(movieController.getMovie)
//     .put(movieController.update)
//     .delete(movieController.delete);

export default movieRouter;

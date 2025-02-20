import express from "express";
import morgan from "morgan";
import client from "./config/db.js";
import movieRouter from "./routers/movie.router.js";

const { NODE_ENV, PORT } = process.env;

const app = express();

client.connect();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));

app.use("/api/movies/", movieRouter);

app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT} [${NODE_ENV}]`);
})
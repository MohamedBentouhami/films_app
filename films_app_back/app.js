import express from "express";
import morgan from "morgan";
import client from "./config/db.js";
import movieRouter from "./routers/movie.router.js";

const {NODE_ENV, PORT} = process.env;

const app = express();
await client.connect();

app.set(morgan('tiny'));

app.use(movieRouter);

app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT} [${NODE_ENV}]`);
})
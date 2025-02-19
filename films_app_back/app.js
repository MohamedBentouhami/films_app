import express from "express";
import morgan from "morgan";

const {NODE_ENV, PORT} = process.env;

const app = express();


app.set(morgan('tiny'));


app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT} [${NODE_ENV}]`);
})
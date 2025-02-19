import client from "../config/db.js"

const movieModel = {
    async getAll(){
        const movies = (await client.query("select * from movie")).rows;
        return movies;
    }
}

export default movieModel;
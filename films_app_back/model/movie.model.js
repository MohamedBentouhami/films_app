import client from "../config/db.js"

const movieModel = {
    async getAll() {
        const movies = (await client.query("select * from movie")).rows;
        return movies;
    },
    async getById(id) {
        const movie = (await client.query("select * from movie where id= $1", [id])).rows;
        return movie;
    },
    async add(movie) {
        const { name, description, release_date, duration, category_id, rating } = movie;
        await client.query("insert into movie(name , description, release_date, duration, category_id, rating) values($1,$2,$3,$4,$5,$6)",
            [name, description, release_date, duration, category_id, rating]);
    },
    async update(id, movie) {
        const { name, description, release_date, duration, category_id, rating } = movie;
        await client.query(`update movie set name = $1 , description = $2, release_date = $3,
                duration = $4, category_id = $5, rating=$6)  where id = $7`,
            [name, description, release_date, duration, category_id, rating, id]);
    },
    async delete(id) {
        await client.query("delete from movie where id = $1", [id])
    }

}

export default movieModel;
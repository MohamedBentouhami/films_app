import pool from "../config/db.js"

const movieModel = {
    async getAll() {
        const movies = await pool.query({
            text:
                `select M.*,C.name as "Category" from movie M join category C on M.category_id = C.id`
        });
        return movies.rows;
    },
    async getById(id) {
        const result = await pool.query({
            text:
                `select * from movie where id= $1`,
            values: [id]
        });
        if (result.rowCount < 1) {
            return null;
        }
        return result.rows;
    },
    async add(movie) {
        const { name, description, release_date, duration, category_id, rating, url_img } = movie;
        await pool.query({
            text:
                `insert into movie(name , description, release_date, duration, category_id, rating, url_img) values($1,$2,$3,$4,$5,$6,$7)`,
            values:
                [name, description, release_date, duration, category_id, rating, url_img]
        });
    },
    async update(id, movie) {
        const { name, description, release_date, duration, category_id, rating } = movie;
        await pool.query({
            text: `update movie set name = $1 , description = $2, release_date = $3, duration = $4, category_id = $5, rating=$6) where id = $7`, values:
                [name, description, release_date, duration, category_id, rating, id]
        });
    },
    async delete(id) {
        await pool.query({ text: "delete from movie where id = $1", values: [id] })
    }

}

export default movieModel;
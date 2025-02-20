import movieModel from "../model/movie.model.js";

const movieRepository = {
    async getAll(){
        return movieModel.getAll();
    },
    async addMovie(movie){
        await movieModel.add(movie);
    },
    async getById(id){
        return movieModel.getById(id);
    },
    async update(id, movie){
        await movieModel.update(movie);
    },
    async delete(id){
        await movieModel.delete(id);
    }   
}

export default movieRepository;

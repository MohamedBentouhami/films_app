import movieModel from "../model/movie.model.js";

const movieRepository = {
    async getAll(){
        return movieModel.getAll();
    }
}

export default movieRepository;

import { useEffect, useState } from "react";
import { getPopularMovies } from "./movie.service";
import './movieList.css';

export default function MovieList() {
    
    const [ movieLists, setMovieLists ] = useState();

    useEffect(() => {
        getPopularMovies().then((res) => {
            setMovieLists(res.results)
        });
    }, [])

    function renderMovieLists() {

        if(!movieLists) {
            return;
        }
        return movieLists.map((movie, index) => {
            return (
                <div className="movie-container" key={movie.id}>
                    <img src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path} />
                    <div className="title"><span>Title:</span> {movie.title}</div>
                    <div className="overview"><span>Description:</span> {movie.overview}</div>
                    <div className="date"><span>Released On:</span> {movie.release_date}</div>
                </div>
            );
        })
    }

    return (
        <div>
            <h1>Movie List</h1> 
            {renderMovieLists()}
        </div>
    );
}
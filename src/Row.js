import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
// import Youtube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, islargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

        console.log(movies);
    }, [fetchUrl, movies]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    return (
        <div className="row">
            <h3 className="row__title">{title}</h3>

            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row_poster ${ islargeRow && "row_posterLarge"}`} src={`${base_url}${ islargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {/* <Youtube videoId={trailerUrl} opts={opts}/> */}
        </div>
    )
}

export default Row;

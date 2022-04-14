import {API} from "./axiosInstance/axiosInstance";
import {useRef, useState} from "react";
import './filter-movies.css';
import {Movie} from "./Movie";
import {Filer} from "./Filter";
import {motion, AnimatePresence} from "framer-motion";

export const FilteringMovies = () => {

    const [searchTitle, setSearchTitle] = useState('');
    const [movies, setMovies] = useState([]);

    const typeMovie = useRef('');

    const searchByType = async (type) => {
        if(!searchTitle.length) return;
        typeMovie.current = type;
        if(type === 'all') {
            const response = await API.searchFilmsByTitle(searchTitle);
            setMovies(response.Search);
        } else{
            const response = await API.searchFilmsByType(searchTitle, type);
            setMovies(response.Search);
        }
    }

    return (
        <div className={'bodyFiler'}>
            <div className={'search-container'}>
                <input
                    type="text"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
                <Filer
                    typeMovie={typeMovie.current}
                    callback={searchByType}
                />
            </div>
            <motion.div
                layout={true}
                className={"popular-movies"}>
                <AnimatePresence>
                    {movies
                        .filter(movie => +movie.Year > 2000)
                        .map(movie => (
                            <Movie
                                title={movie.Title}
                                poster={movie.Poster}
                                key={movie.imdbID}
                            />
                        ))
                }
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
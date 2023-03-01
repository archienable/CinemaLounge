import React, {useEffect, useState} from 'react';
import style from './Movies.module.css'
import axios from 'axios';

const Movies = () => {

    const [dataMovies, setDataMovies] = useState([])
    console.log('AAAAAAAA', dataMovies)

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=e2b9d91b65b69dd7ccd546627ad20b76');
        setDataMovies(response.data)
    }

    return (
        <div className={style.container}>
            <div className={style.selectedFilm}>
                <div className={style.jpeg} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${dataMovies.backdrop_path})`}}></div>
                <div className={style.jpegTwo} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${dataMovies.poster_path})`}}></div>
                <div>
                    {dataMovies.original_title}
                </div>
                <div>
                    {dataMovies.release_date}
                </div>
                <div>
                    {dataMovies.popularity}
                </div>
            </div>
        </div>
    );
};

export default Movies;
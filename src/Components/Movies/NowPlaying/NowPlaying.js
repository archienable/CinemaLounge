import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from "./NowPlaying.module.css";
import {Link} from "react-router-dom";

const NowPlaying = () => {

    const [dataNowPlaying, setDataNowPlaying] = useState([])
    console.log('AAAAAAAA', dataNowPlaying)

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e2b9d91b65b69dd7ccd546627ad20b76');
        setDataNowPlaying(response.data.results)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                {dataNowPlaying.map(film => {
                    return (
                        <Link to={`/movies/${film.id}`} key={`nowPlaying-list-item-${film.id}`}>
                            <div className={style.selectedFilm}>
                                <div className={style.jpeg} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${film.poster_path})`}}></div>
                                <div className={style.infoSelectedFilm}>
                                    <div>
                                        {film.original_title}
                                    </div>
                                    <div>
                                        {film.release_date}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default NowPlaying;
import React, {useEffect, useState} from 'react';
import style from './Popular.module.css'
import axios from "axios";
import {Link} from "react-router-dom";

const Popular = () => {

    const [dataPopular, setDataPopular] = useState([])
    console.log('AAAAAAAA', dataPopular)

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e2b9d91b65b69dd7ccd546627ad20b76');
        setDataPopular(response.data.results)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                {dataPopular.map(film => {
                    return (
                        <Link to={`/movies/${film.id}`} key={`popular-list-item-${film.id}`}>
                            <div className={style.selectedFilm} >
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

export default Popular;
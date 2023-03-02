import React, {useEffect, useState} from 'react';
import style from './UpComing.module.css'
import axios from "axios";
import {Link} from "react-router-dom";

const UpComing = () => {

    const [dataUpComing, setDataUpComing] = useState([])
    console.log('AAAAAAAA', dataUpComing)

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e2b9d91b65b69dd7ccd546627ad20b76');
        setDataUpComing(response.data.results)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                {dataUpComing.map(film => {
                    return (
                        <Link to={`/movies/${film.id}`} key={`upcoming-list-item-${film.id}`}>
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

export default UpComing;
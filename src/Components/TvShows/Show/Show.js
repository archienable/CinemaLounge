import React, {useEffect, useState} from 'react';
import style from './Show.module.css'
import {useParams} from "react-router-dom";
import axios from "axios";

const Show = () => {

    const [dataShow, setDataFilmShow] = useState({})
    console.log('SHOW', dataShow)

    const {show} = useParams()

    useEffect(() => {
        getUser()
    }, [show])

    async function getUser() {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${show}?api_key=e2b9d91b65b69dd7ccd546627ad20b76`);
        setDataFilmShow(response.data)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.selectedFilm}>
                    <div className={style.jpeg} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${dataShow.backdrop_path})`}}></div>
                    <div className={style.infoSelectedFilm}>
                        <div className={style.jpegTwo} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${dataShow.poster_path})`}}></div>
                        <div className={style.infoAboutFilm}>
                            <div className={style.infoAboutFilmItem}>{dataShow.original_name}</div>
                            <div className={style.infoAboutFilmItem}>{dataShow.first_air_date}</div>
                            <div className={style.infoAboutFilmItem}>{dataShow.overview}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
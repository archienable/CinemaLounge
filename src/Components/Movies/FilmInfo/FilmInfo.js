import React, {useState, useEffect} from 'react';
import style from './FilmInfo.module.css'
import axios from "axios";
import {useParams} from "react-router-dom";

const FilmInfo = () => {

    const [dataFilm, setDataFilm] = useState({})
    console.log('FILM', dataFilm)

    const {film} = useParams()

    useEffect(() => {
        getUser()
    }, [film])

    async function getUser() {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${film}?api_key=e2b9d91b65b69dd7ccd546627ad20b76`);
        setDataFilm(response.data)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.selectedFilm}>
                    <div className={style.jpeg} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${dataFilm.backdrop_path})`}}></div>
                    <div className={style.infoSelectedFilm}>
                        <div className={style.jpegTwo} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${dataFilm.poster_path})`}}></div>
                        <div className={style.infoAboutFilm}>
                            <div className={style.infoAboutFilmItem}>{dataFilm.original_title}</div>
                            <div className={style.infoAboutFilmItem}>{dataFilm.release_date}</div>
                            <div className={style.infoAboutFilmItem}>{dataFilm.overview}</div>
                            <div className={style.infoAboutFilmItem}>{dataFilm.budget}$</div>
                            <div className={style.infoAboutFilmItem}>{dataFilm.revenue}$</div>
                            <div className={style.infoAboutFilmItem}>{dataFilm.runtime} min.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmInfo;
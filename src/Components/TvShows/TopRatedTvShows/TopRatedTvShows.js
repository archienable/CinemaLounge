import React, {useEffect, useState} from 'react';
import style from './TopRatedTvShows.module.css'
import axios from "axios";
import {Link} from "react-router-dom";

const TopRatedTvShows = () => {

    const [dataTopRatedTvShows, setDataTopRatedTvShows] = useState([])
    console.log('AAAAAAAA', dataTopRatedTvShows)

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=e2b9d91b65b69dd7ccd546627ad20b76');
        setDataTopRatedTvShows(response.data.results)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                {dataTopRatedTvShows.map(show => {
                    return (
                        <Link to={`/tvShows/${show.id}`} key={`topRatedTvShows-list-item-${show.id}`}>
                            <div className={style.selectedFilm}>
                                <div className={style.jpeg} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${show.poster_path})`}}></div>
                                <div className={style.infoSelectedFilm}>
                                    <div>
                                        {show.original_name}
                                    </div>
                                    <div>
                                        {show.first_air_date}
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

export default TopRatedTvShows;
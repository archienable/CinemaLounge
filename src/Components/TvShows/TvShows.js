import React from 'react';
import style from "../Movies/Movies.module.css";
import {NavLink} from "react-router-dom";

const TvShows = () => {
    return (
        <div className={style.container}>
            <div className={style.moviesLink}>
                <h2 className={style.itemLink}>
                    <NavLink to='/tvShows/airingToday' className={style.popularLink}>TV Airing Today</NavLink>
                </h2>
                <h2 className={style.itemLink}>
                    <NavLink to={`/tvShows/onTheAir`} className={style.nowPlayingLink}>TV On The Air</NavLink>
                </h2>
                <h2 className={style.itemLink}>
                    <NavLink to={`/tvShows/popular`} className={style.upcomingLink}>POPULAR</NavLink>
                </h2>
                <h2 className={style.itemLink}>
                    <NavLink to={`/tvShows/topRated`} className={style.topRatedLink}>TOP RATED</NavLink>
                </h2>
            </div>
        </div>
    );
};

export default TvShows;
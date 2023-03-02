import React from 'react';
import style from './Movies.module.css'
import { NavLink } from "react-router-dom";
import Popular from "./Popular/Popular";

const Movies = () => {

    return (
        <div className={style.container}>
            <div className={style.moviesLink}>
                <h2 className={style.itemLink}>
                    <NavLink to='/movies/popular' className={style.popularLink}>POPULAR</NavLink>
                </h2>
                <h2 className={style.itemLink}>
                    <NavLink to={`/movies/nowPlaying`} className={style.nowPlayingLink}>NOW PLAYING</NavLink>
                </h2>
                <h2 className={style.itemLink}>
                    <NavLink to={`/movies/topRated`} className={style.topRatedLink}>TOP RATED</NavLink>
                </h2>
                <h2 className={style.itemLink}>
                    <NavLink to={`/movies/upcoming`} className={style.upcomingLink}>UPCOMING</NavLink>
                </h2>
            </div>
            {/*<PopularTvShows />*/}
        </div>
    );
};

export default Movies;
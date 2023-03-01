import React from 'react';
import style from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title}>
                    <NavLink to='/' className={style.cinemaLounge}>Cinema lounge</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/movies' className={style.movies}>Movies</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/tvShows' className={style.tvShows}>Tv Shows</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/people' className={style.people}>People</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
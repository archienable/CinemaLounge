import React from 'react';
import style from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.window}>
                    <div className={style.search}>
                        <input className={style.input} placeholder='search'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
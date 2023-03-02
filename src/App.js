import './App.css';
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import TvShows from "./Components/TvShows/TvShows";
import People from "./Components/People/People";
import UpComing from "./Components/Movies/UpComing/UpComing";
import TopRated from "./Components/Movies/TopRated/TopRated";
import NowPlaying from "./Components/Movies/NowPlaying/NowPlaying";
import Popular from "./Components/Movies/Popular/Popular";
import TopRatedTvShows from "./Components/TvShows/TopRatedTvShows/TopRatedTvShows";
import PopularTvShows from "./Components/TvShows/PopularTvShows/PopularTvShows";
import TvOnTheAirTvShows from "./Components/TvShows/TvOnTheAirTvShows/TvOnTheAirTvShows";
import TvAiringTodayTvShows from "./Components/TvShows/TvAiringTodayTvShows/TvAiringTodayTvShows";
import React from ".";
import FilmInfo from "./Components/Movies/FilmInfo/FilmInfo";
import Show from "./Components/TvShows/Show/Show";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className='Container'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/movies' element={<Movies />} />
                        <Route path='/tvShows' element={<TvShows />} />
                        <Route path='/people' element={<People />} />
                        <Route path='/movies/popular' element={<><Movies /><Popular /></>} />
                        <Route path='/movies/nowPlaying' element={<><Movies /><NowPlaying /></>} />
                        <Route path='/movies/topRated' element={<><Movies /><TopRated /></>} />
                        <Route path='/movies/upcoming' element={<><Movies /><UpComing /></>} />
                        <Route path='/movies/:film' element={<FilmInfo />} />
                        <Route path='/tvShows/airingToday' element={<><TvShows /><TvAiringTodayTvShows /></>} />
                        <Route path='/tvShows/onTheAir' element={<><TvShows /><TvOnTheAirTvShows /></>} />
                        <Route path='/tvShows/popular' element={<><TvShows /><PopularTvShows /></>} />
                        <Route path='/tvShows/topRated' element={<><TvShows /><TopRatedTvShows /></>} />
                        <Route path='/tvShows/:show' element={<Show />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

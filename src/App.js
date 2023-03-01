import './App.css';
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import TvShows from "./Components/TvShows/TvShows";
import People from "./Components/People/People";

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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

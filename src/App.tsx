import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {Counter} from "./components/Counter";
import './index.scss'
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPAge.async";

const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            {/*<Counter/>*/}
        </div>
    );
};

export default App;
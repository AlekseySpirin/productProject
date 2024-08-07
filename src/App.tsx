import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPAge.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";




const App = () => {
    const {theme, toggleTheme } = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
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
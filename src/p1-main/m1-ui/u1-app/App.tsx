import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5-rrd-v6/HW5";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
import {ThemeStateType} from "../../../p2-homeworks/h12/bll/themeReducer";

function App() {
    const {theme} = useSelector<AppStoreType, ThemeStateType>(state => state.themes)
    return (
        <div className={`${s[theme]} + ${s.App}`}>
            <div>react homeworks:</div>
            <HW5/>
        </div>
    )
}

export default App

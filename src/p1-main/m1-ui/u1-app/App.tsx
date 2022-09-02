import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW5 from "../../../p2-homeworks/h5-rrd-v6/HW5";
import HW6 from "../../../p2-homeworks/h6/HW6";
import HW7 from "../../../p2-homeworks/h7/HW7";
import HW8 from "../../../p2-homeworks/h8/HW8";
import HW9 from "../../../p2-homeworks/h9/HW9";
import HW10 from "../../../p2-homeworks/h10/HW10";
import HW11 from "../../../p2-homeworks/h11/HW11";

import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
import {ThemeStateType} from "../../../p2-homeworks/h12/bll/themeReducer";
import HW12 from "../../../p2-homeworks/h12/HW12";
//
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

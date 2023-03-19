import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../p1-main/m1-ui/u1-app/App.module.css'
import {restoreState} from '../h6/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeStateType} from "../h12/bll/themeReducer";


function HW11() {
    const {theme, themes} = useSelector<AppStoreType, ThemeStateType>(state => state.themes)

    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (event: Event, value: number | number[]) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        } else {
            setValue1(value)
        }
    }


    return (
        <div className={s[theme]}>
            <div className={s2.hwTitle}>homework 11</div>
            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            // сделать так чтоб value1 изменялось // пишет студент
                            value={value1}
                            onChange={change}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                            value={[value1, value2]}
                            onChange={change}
                            valueLabelDisplay="auto"
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11

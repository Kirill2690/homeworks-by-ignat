import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeStateType} from "./bll/themeReducer";



function HW12() {

    const {theme, themes} = useSelector<AppStoreType, ThemeStateType>(state => state.themes)
    const dispatch = useDispatch()
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }



    return (
        <div className={s[theme]}>
            <hr/>
            <span style={{color:"black"}}>
                homeworks 12
            </span>
            <div className={s.container}>
                <span className={s[theme + '-text']}>Change your theme: </span>
                <SuperRadio name={'radio'}
                            options={themes}
                            value={theme}
                            onChange={onChangeCallback}
                />
                <SuperSelect options={themes}
                             value={theme}
                             onChange={onChangeCallback}
                />
            </div>
            <hr/>
        </div>
    );
}
export default HW12

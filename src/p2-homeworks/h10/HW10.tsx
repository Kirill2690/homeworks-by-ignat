import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {Loader} from "./loader/Loader";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {Button} from "@mui/material";

function HW10() {

    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)

    };

    return (
        <div>
            <hr/>
            <hr/>
            homeworks 10
            {isLoading
                ? (
                    <Loader/>
                ) : (
                    <div>
                        <Button onClick={setLoading}>Set loading...</Button>
                    </div>
                )
            }

            <hr/>
        </div>
    )
}

export default HW10

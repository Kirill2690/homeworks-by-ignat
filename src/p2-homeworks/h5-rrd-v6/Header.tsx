/*
import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

///
function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} style={(params) => {
                return {color: params.isActive ? 'darkseagreen' : '#FF1493'}
            }}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} style={(params) => {
                return {color: params.isActive ? 'darkseagreen' : '#FF1493'}
            }}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} style={(params) => {
                return {color: params.isActive ? 'darkseagreen' : '#FF1493'}
            }}>junior 𓆩+𓆪 </NavLink>
            <div className={s.block}/>

        </div>
    )
}

export default Header
*/

import React, {FC} from 'react'
import burgerIcon from './pages/burger.svg'
import s from './Header.module.css'
import {useLocation} from 'react-router-dom'
import {PATH} from './Pages'

type PropsType = {
    handleOpen: () => void
}

export const Header: FC<PropsType> = ({handleOpen}) => {
    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    const location = useLocation()
    const currentPath = location.pathname

    const pageName =
        currentPath === PATH.PRE_JUNIOR
            ? 'Pre-junior'
            : currentPath === PATH.JUNIOR
                ? 'Junior'
                : currentPath === PATH.JUNIOR_PLUS
                    ? 'Junior Plus'
                    : 'Error'
    return (
        <>
            <div id={'hw5-header'} className={s.header}>
                <img
                    src={burgerIcon}
                    id={'hw5-burger-menu'}
                    className={s.burgerMenuIcon}
                    onClick={handleOpen}
                    alt={'open menu'}
                />
                <h1>{pageName}</h1>
            </div>
        </>
    )
}

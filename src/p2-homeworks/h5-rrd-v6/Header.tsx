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

import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    const linkClass = ({isActive}: { isActive: boolean }) => {
        return isActive ? `${s.linkDef} ${s.active}` : s.linkDef
    }
    return (
        <div className={s.navBar}>
                <NavLink to={'/pre-junior'} className={linkClass}>pre-junior</NavLink>
                <NavLink to={'/junior'} className={linkClass}>junior</NavLink>
                <NavLink to={'/junior-plus'} className={linkClass}>junior+</NavLink>
                <div className={s.navLinksAnchor}>Nav</div>
        </div>

    )
}

export default Header

import React from 'react'
import err from './404.png'
import s from '../Header.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <img src={err} alt="404"/>
        </div>
    )
}

export default Error404

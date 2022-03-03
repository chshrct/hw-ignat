import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback: (_id: number)=>void
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={s.affairsWrapper}>

            {mappedAffairs}
            <div className={s.buttonsWrap}>
            <button className={`${s.button} ${props.filter==='all' && s.filtered}`} onClick={setAll}>All</button>
            <button className={`${s.button} ${props.filter==='high' && s.filtered}`} onClick={setHigh}>High</button>
            <button className={`${s.button} ${props.filter==='middle' && s.filtered}`} onClick={setMiddle}>Middle</button>
            <button className={`${s.button} ${props.filter==='low' && s.filtered}`} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs

import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id:number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClass = `${s.affairPriority} ${s[props.affair.priority]}`

    return (
        <div className={s.affair}>
            <span className={s.affairName}>{props.affair.name}</span>
            <span className={priorityClass}>{props.affair.priority}</span>
            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

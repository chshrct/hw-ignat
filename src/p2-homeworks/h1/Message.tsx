import React from 'react'
import cl from './Message.module.css'


type msgPropsType ={
    avatar:string
    name:string
    message: string
    time: string
}




function Message(props:msgPropsType){
    return (
        <div className={cl.wrapper}>
                <img src={props.avatar} alt="avatar"/>
            <div className={cl.message_wrapper}>
                <div className={cl.author}>{props.name}</div>
                <div className={cl.message}>{props.message}</div>
                <div className={cl.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
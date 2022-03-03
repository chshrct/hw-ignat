import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}
const messageData2 = {
    avatar: 'https://i.pinimg.com/originals/85/dd/71/85dd71c7c80d54583d6c2d078342637a.jpg',
    name: 'Bender',
    message: 'Bite my shiny metal ass!',
    time: '22:10',
}

function HW1() {
    return (
        <div>
            <hr/>
            <h4>homeworks 1</h4>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

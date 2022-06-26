import React from 'react'
import k from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={k.message}>
            <img src={props.avatar} alt={"avatar"} className={k.message_avatar}/>
            <div className={k.corner}/>
            <div className={k.message_content}>
                <div className={k.message_name}>{props.name}</div>
                <div className={k.message_text}>{props.message}</div>
                <div className={k.message_time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
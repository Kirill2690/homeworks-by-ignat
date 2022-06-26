import React from 'react'
import a from "./AlternativeMessage.module.css";
import k from "./Message.module.css";

//
type AlternativeMessageType = {
    avatar_friends: string
    name_friends: string
    message_friends: string
    time_request: string
}
export const AlternativeMessage = (props: AlternativeMessageType) => {
    return (
        <div className={a.message}>
            <img src={props.avatar_friends} alt={"avatar_friends"} className={a.message_avatar_friends}/>
            <div className={a.corner}/>
            <div className={a.message_content_friends}>
                <div className={a.message_name_friends}>{props.name_friends}</div>
                <div className={a.message_text_friends}>{props.message_friends}</div>
                <div className={a.message_time_request}>{props.time_request}</div>
            </div>
        </div>
    );
}


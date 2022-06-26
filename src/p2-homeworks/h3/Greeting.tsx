import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string,// need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void,// need to fix any
    addUser: () => void, // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
    error: string, // need to fix any
    totalUsers: number// need to fix any
}

// презентационная компонента (для верстальщика)
export const Greeting = (props: GreetingPropsType) => {

    const inputClass = props.error ? s.errorInput : s.error // need to fix with (?:)


    return (
        <div className={s.greeting}>

            <div>
                <div className={s.error}>{props.error}</div>

                <input value={props.name}
                       onChange={props.setNameCallback}
                       className={inputClass}
                       onKeyDown={props.onEnter}/>
                <span className={s.count}>{props.totalUsers}</span>
                <button onClick={props.addUser} className={s.button}>add
                </button>


            </div>

        </div>

    )
}



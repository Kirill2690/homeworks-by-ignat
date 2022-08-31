import React, {KeyboardEvent, ChangeEvent, useState} from 'react'
import {Greeting} from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: UserType[]// need to fix any
    addUserCallback: (name: string) => void// need to fix any
}


export const GreetingContainer = (props: GreetingContainerPropsType) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const shortName = e.currentTarget.value.trim()

        if (shortName) {
            setName(shortName)
            setError('')
        } else {
            setName('')
            setError('Enter your name')
        }
    }

    const addUser = () => {
        props.addUserCallback(name)
        alert(`Hello ${name} !`) // need to fix
    }


    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    const totalUsers = props.users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}/>
    )
}




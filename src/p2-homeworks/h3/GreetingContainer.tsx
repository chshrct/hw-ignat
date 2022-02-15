import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const title = e.currentTarget.value
        const wordRegExp = /^[a-zA-Zа-яА-Я]+$/
        if (title === '') {
            setError('')
            setName('')
        } else if (wordRegExp.test(title)) {
            setError('')
            setName(title)
        } else {
            setError('Имя должно состоять из букв')
            setName('')
        }

    }
    const addUser = () => {
        alert(`Hello  ${name}!`)
        addUserCallback(name)
        setName('')
    }
    const isButtonDisabled = !(error === '' && name !== '')

    const totalUsers = users.length

    const addUserEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13 && error === '' && name !== '') {
            addUser()
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            isButtonDisabled={isButtonDisabled}
            addUserEnter={addUserEnter}
        />
    )
}

export default GreetingContainer

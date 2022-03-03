import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
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
        const name = e.currentTarget.value
        const nameRegExp = /^[a-zA-Zа-яА-Я]+$/  // имя состоит из одного слова и букв
        if (name === '') { //пустая строка не ошибка, на случай, если пользователь еще не начал вводить значение или стер предыдущее
            error && setError('')
            setName('')
        } else if (nameRegExp.test(name)) {
            error && setError('')
            setName(name)
        } else {
            !error && setError('Имя должно состоять из букв')
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
        if (e.charCode === 13 && name) {
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

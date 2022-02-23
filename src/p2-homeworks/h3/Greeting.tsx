import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    isButtonDisabled: boolean
    addUserEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, isButtonDisabled, addUserEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass


    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={addUserEnter}/>
            <button onClick={addUser} disabled={isButtonDisabled}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errWrap}>{error}</div>

        </div>
    )
}

export default Greeting

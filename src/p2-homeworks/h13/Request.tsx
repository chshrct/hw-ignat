import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import hwApi from './RequestApi'

const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [statusText, setStatusText] = useState<string>('отправьте запрос')
    const [error, setError] = useState<boolean>(false)

    const onChangeSetChecked = (isChecked: boolean) => setChecked(isChecked)
    const sendRequest = () => {
        hwApi.success(checked).then(({ data }) => {
            setError(false)
            setStatusText(data.errorText)
        }).catch(({response})=>{
            setError(true)
            response.data.errorText?setStatusText(response.data.errorText):setStatusText('что-то пошло не так')
        })
    }
    return (
        <div>
            <h5>Request</h5>
            <SuperCheckbox onChangeChecked={onChangeSetChecked}>true/false</SuperCheckbox>
            <div>
                <SuperButton onClick={sendRequest}>Send request</SuperButton>
                <div style={error?{color:'red'}:{}}>{statusText}</div>
            </div>
        </div>
    )
}

export default Request

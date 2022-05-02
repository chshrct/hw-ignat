import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loading } from './bll/loadingReducer'
import { AppStoreType } from './bll/store'
import loader from './Capsule-Loading.svg'

function HW10() {
    console.log('rendered')

    const isLoading = useSelector<AppStoreType>((state) => state.loading.isLoading)
    console.log(isLoading)

    const dispatch = useDispatch()
    // useSelector, useDispatch

    const setLoading = () => {
        dispatch(loading(true))
        setTimeout(() => {
            dispatch(loading(false))
        }, 3000)
        // dispatch
        // setTimeout
        console.log('loading...')
    }

    return (
        <div>
            <hr />
            <h4>homeworks 10</h4>
            {/*should work (должно работать)*/}
            {isLoading ? (
                <div>
                    <img src={loader} alt="loader" />
                </div>
            ) : (
                <div style={{paddingLeft:'10px'}}>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>
            )}
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10

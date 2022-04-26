import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from '../h10/bll/store'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'
import { changeThemeC, ColorSchemeTypes } from './bll/themeReducer'
import s from './HW12.module.css'

function HW12() {
    const dispatch = useDispatch()
    const themes = useSelector((state:AppStoreType)=>state.theme.themes)
    const theme = useSelector((state:AppStoreType)=>state.theme.activeTheme)

    // useDispatch, onChangeCallback

    const onChangeCallback = (e:ChangeEvent<HTMLSelectElement>) => dispatch(changeThemeC(e.currentTarget.value as ColorSchemeTypes))

    return (
        <div className={s[theme]}>
            <hr />
            <h4 className={s[theme + '-text']}>homeworks 12</h4>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes} onChange={onChangeCallback} style={{marginLeft:'10px'}}/>
            <hr />
        </div>
    )
}

export default HW12

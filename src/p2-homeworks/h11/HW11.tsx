import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (event: Event, value: number | number[], activeThumb: number) => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    return (
        <div>
            <hr />
            <h4>homeworks 11</h4>
            {/*should work (должно работать)*/}
            <div style={{marginLeft:'10px'}}>
                <span style={{ display: 'inline-block', width: '30px' }}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>
            <div style={{marginLeft:'10px'}}>
                <span style={{ display: 'inline-block', width: '30px' }}>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                    min={10}
                    max={50}
                    step={5}

                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr />
        </div>
    )
}

export default HW11

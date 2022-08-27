import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange";


function HW11() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(100)
    return (
        <div style={{background: "silver"}}>
            <hr/>
            <hr/>
            homeworks 11


            <div>
                <span>{min}</span>
                <SuperRange
                    onChangeRange={(min) => setMin(min)}

                />
            </div>

            <SuperDoubleRange
                min={min}
                max={max}
                setMin={setMin}
                setMax={setMax}

            />


        </div>
    )
}

export default HW11

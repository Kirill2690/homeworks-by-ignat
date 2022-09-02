import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.css'


function HW11() {
    /*const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(100)*/
    const[value,setValue]=useState<number[]>([0,100])
    const onChangeRange=(newValue:number)=>{
        setValue((value)=>{
            const copy=[...value];
            copy[0]=newValue
            return copy
        })
    }
    const handleChange=(event:Event,newValue:number|number[])=>{
        setValue(newValue as number[])
    }
    return (
        <div style={{background: "silver"}}>
            <hr/>
            <hr/>
            homeworks 11


            <div>
                <span>{value[0]}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value[0]}
                />
            </div>
            <div className={s.container}>
                <span>{value[0]}</span>

                <SuperDoubleRange
                    value={value}
                    handleChange={handleChange}
                />
                <span style={{margin:10}}>{value[1]}</span>

            </div>



<hr/>
        </div>


    )
}

export default HW11

import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (newValue: number) => void
    value:number


};

const SuperRange= (props:SuperRangePropsType) => {
    const onChangeCallback = (e: Event,value:number|number[]) => {
       if(typeof value==='number'){
           props.onChangeRange(value)
       }
    }



    return (
        <>
            <Slider
                value={props.value}
                onChange={onChangeCallback}
                color={'secondary'}
                valueLabelDisplay='auto'
                size={"small"}
                style={{height: 5, width: 110, padding: 5, marginLeft: 10}}

            />
        </>
    )
}

export default SuperRange

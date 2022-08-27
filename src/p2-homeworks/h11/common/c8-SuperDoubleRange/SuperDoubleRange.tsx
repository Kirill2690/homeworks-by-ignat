import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangeProps = {
    min: number
    max: number
    setMin: (min: number) => void
    setMax: (max: number) => void


}


export const SuperDoubleRange = (props: SuperDoubleRangeProps) => {
    const mark = [{
        value: props.min,
        label: props.min
    },
        {
            value: props.max,
            label: props.max

        },


    ]


    const onChangeRange = (event: Event, value: number | number[]) => {
        if (Array.isArray(value)) {
            props.setMin(value[0])
            props.setMax(value[1])
        }
    }
    return (

        <div>
            <span>{mark[0].value}</span>
            <Slider
                size={"small"}
                style={{height: 5, width: 110, padding: 5, marginLeft: 10}}
                value={[props.min, props.max]}
                valueLabelDisplay='auto'
                color='primary'
                onChange={onChangeRange}
            />
            <span style={{marginLeft: 10}}>{mark[1].value}</span>

        </div>


    )
}






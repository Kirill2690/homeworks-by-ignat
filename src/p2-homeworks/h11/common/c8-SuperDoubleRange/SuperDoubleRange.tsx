import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangeProps = {
    value: number[]
    handleChange: (event: Event, newValue: number | number[]) => void


}


export const SuperDoubleRange = (props: SuperDoubleRangeProps) => {


    return (

        <div>
            <Slider
                size={"small"}
                style={{height: 5, width: 120, marginLeft:10}}
                value={props.value}
                valueLabelDisplay='auto'
                color='primary'
                onChange={props.handleChange}
            />


        </div>


    )
}






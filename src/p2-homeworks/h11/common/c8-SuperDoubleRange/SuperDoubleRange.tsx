import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
        value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {



    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };

    const marks = [
        {
            value: 0,
            label: 'Start',
        },
        {
            value: 100,
            label: 'Stop',
        },
    ];


    return (
        <>
            <Box sx={{width: 300, margin: '10px'}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    disableSwap
                    color="secondary"
                    marks={marks}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange





import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import f from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>,
    setFilter: (filter: FilterType) => void,
    deleteAffairCallback: (id: number) => void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((el: AffairType) => (
        <Affair // should work
            key={el._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={el}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')  // need to fix
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button className={f.button} onClick={(set) => setAll()}>All</button>
            <button className={f.button} onClick={(set) => setHigh()}>High</button>
            <button className={f.button} onClick={(set) => setMiddle()}>Middle</button>
            <button className={f.button} onClick={(set) => setLow()}>Low</button>
        </div>
    )
}

export default Affairs

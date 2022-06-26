import React from 'react'
import {inspect} from "util";
import {AffairType, deleteAffair} from "./HW2";
import affairs from "./Affairs";
import f from "./Affairs.module.css"


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType,

    deleteAffairCallback: (id: number) => void// need to fix any

}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    // need to fix

    return (
        <div className={f.someClass}>
            <table className={f.table}>
                <tr>
                    <th className={f.item_affair_name}>{props.affair.name}</th>
                    <th className={f.item_affair_priority}>{props.affair.priority}</th>
                    <button className={f.button_delete} onClick={deleteCallback}>Delete
                    </button>
                </tr>

            </table>


        </div>
    )
}

export default Affair

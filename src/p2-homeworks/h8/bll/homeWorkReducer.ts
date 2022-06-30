import {UserType} from "../HW8";

/*export type ActionsType = SortType | CheckType

type SortType = {
    type: 'SORT'
    payload: 'up' | 'down'
}
type CheckType = {
    type: 'CHECK'
    payload: number

}*/
export type ActionsType={type:'SORT',payload:'up' | 'down'}|{type:'CHECK',payload:number}
export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            const newState = [...state].sort((a, b) =>{
            if (a.name > b.name) return 1
            else if (a.name < b.name) return -1
            else return 0
        }
        )

            return action.payload === 'up' ? newState : newState.reverse()
    }
case
    'CHECK':
    {

        return state.filter(a => a.age >= action.payload)
    }


default:
    return state
}
}
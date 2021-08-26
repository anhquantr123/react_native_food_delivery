

import { ADD_FOOD , DELETE_FOOD } from "../actions/action-type"
const initialState={
    foodList :  [] as any
}

export const foodReducer = (state=initialState , action: any )=>{
    switch(action.type){
        case ADD_FOOD: 
            return {
                ...state,
                foodList : state.foodList.concat({
                    key: Math.random(),
                    name: action.data
                }),
                
            
            };
        case DELETE_FOOD: 
            return {
                ...state,
                foodList: state.foodList.filter((item: any) =>
                item.key !== action.key)
            };
        default:
            return state

    }
}
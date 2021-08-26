import { ADD_FOOD, DELETE_FOOD } from "./action-type";

export const addFood = (food: string) => ({
    type: ADD_FOOD,
    data: food
});

export const deleteFood =(key: number|string)=>({
    type: DELETE_FOOD,
    key: key
});


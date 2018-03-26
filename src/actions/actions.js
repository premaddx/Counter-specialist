import {
    ADD_TODO,
    SET_IS_COMPLETE,
    REMOVE_TODO,
} from './action-types';


export function addTodo(text) {
    return { type: ADD_TODO, text }
}
   
export function removeTodo(index) {
    return { type: REMOVE_TODO, index }
}
   
export function setIsComplete(index) {
    return { type: SET_IS_COMPLETE, index }
}
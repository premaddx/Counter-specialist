import {
    ADD_COUNTER,
    DELETE_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
} from './action-types';


export function addCounter() {
    return { type: ADD_COUNTER }
}
   
export function deleteCounter() {
    return { type: DELETE_COUNTER }
}
   
export function incrementCounter(id) {
    return { type: INCREMENT_COUNTER, id }
}

export function decrementCounter(id) {
    return { type: DECREMENT_COUNTER, id }
}
import { 
    ADD_COUNTER,
    DELETE_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
 } from '../actions/action-types';

const initialState = {
    counter: [],
};


export default function counterReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_COUNTER: {
        const newCounterArr = [...state.counter];
        const nextId = (newCounterArr.length) + 1;
        newCounterArr.push({
            value: 0,
            id: nextId,
        });
        return { counter: newCounterArr };
      }
    case INCREMENT_COUNTER: {
        const newCounterArr = [...state.counter];
        newCounterArr.forEach((elem, index) => {
            if(elem.id == action.id) {
                newCounterArr[index].value = elem.value + 1;
            }
        });
        return { counter: newCounterArr };
      }
      case DECREMENT_COUNTER: {
        const newCounterArr = [...state.counter];
        newCounterArr.forEach((elem, index) => {
            if(elem.id == action.id) {
                newCounterArr[index].value = elem.value - 1;
            }
        });
        return { counter: newCounterArr };
      }
      case DELETE_COUNTER: {
        const newCounterArr = [...state.counter];
        newCounterArr.pop();
        return { counter: newCounterArr };
      }
      default:
        return state
    }
}

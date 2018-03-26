import { ADD_TODO, REMOVE_TODO, SET_IS_COMPLETE } from '../actions/action-types';

const initialState = {
    todos: [],
    currentSeq: 0,
};


export default function todoApp(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO: {
        const newToDoList = [...state.todos];
        newToDoList.push({
            text: action.text,
            is_complete: false,
            id: state.currentSeq,
        });
        return { todos: newToDoList, currentSeq: state.currentSeq + 1};
      }
      case SET_IS_COMPLETE: {
        const newToDoList = [...state.todos];
        newToDoList.forEach((elem, index) => {
            if(elem.id == action.index) {
                newToDoList[index].is_complete = !(elem.is_complete);
            }
        });
        return { todos: newToDoList, currentSeq: state.currentSeq };
      }
      case REMOVE_TODO: {
        const newToDoList = [...state.todos];
        const newArr = newToDoList.filter(elem => elem.id != action.index);
        return { todos: newArr, currentSeq: state.currentSeq };
      }
      default:
        return state
    }
}

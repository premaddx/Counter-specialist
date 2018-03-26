import React from 'react';
import ToDo from './ToDo';
import { setIsComplete, removeTodo } from '../../actions/actions';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        this.props.dispatch(setIsComplete(e.target.value));
    }
    handleButtonClick = (index, e) => {
        this.props.dispatch(removeTodo(index));
    }

    render() {
        const arr = this.props.list.todos;
        return (
            <div>
                    {
                        arr.map(elem => {
                            return <ToDo key={elem.id} index={elem.id} text={elem.text} isComplete={elem.is_complete} onClick={this.handleClick} onButtonClick={this.handleButtonClick}/>
                        })
                    }
            </div>
        )
    }
}

export default ToDoList
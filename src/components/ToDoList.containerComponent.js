import React from 'react';
import ToDoList from './toDoList/ToDoList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../actions/actions';

class ContainerComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        console.log(this.props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addTodo(this.input.value.trim()));
        this.input.value = '';
    }
       render() { 
           return (
            <div>
                <ToDoList list={this.props.todoApp} dispatch={this.props.dispatch}/>
                <form onSubmit={this.handleSubmit} >
                    <input ref={node => { this.input = node }} />
                    <button type="submit"> Add Todo </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContainerComponent);  

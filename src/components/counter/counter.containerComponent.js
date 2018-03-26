import React from 'react';
import { connect } from 'react-redux';
import CounterParent from './counterParent';
import { addCounter, deleteCounter } from '../../actions/counter.actions';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAddButtonClick = (e) => {
        this.props.dispatch(addCounter());
    }

    handleDeleteButtonClick = (e) => {
        if(this.props.counter.length > 0){
            this.props.dispatch(deleteCounter());
        } else {
            alert('Caution!!');
        }
    }

    render(){
        return(
            <div>
                <span>For better experience use chrome only and don't expect much it is just a counter.</span>
                <CounterParent propsObj={this.props}/>
                <button onClick={this.handleAddButtonClick} style={{marginRight: '40px'}}>Add counter</button>{/*onClick dispatch action add counter*/}
                {this.props.counter.length > 0 ? <button onClick={this.handleDeleteButtonClick}>Delete counter</button> : null}
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { counterReducer } = state;
    return counterReducer;
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer)


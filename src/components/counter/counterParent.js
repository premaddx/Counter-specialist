import React from 'react';
import CounterChild from './counterChild';
import { incrementCounter, decrementCounter } from '../../actions/counter.actions';

class CounterParent extends React.Component {
    constructor(props){
        super(props);
    }
    // declare functions for dispatching increment and decrement counter

    handleIncrementCounter = (id, e) => {
        this.props.propsObj.dispatch(incrementCounter(id));
    }

    handleDecrementCounter = (id, e) => {
        this.props.propsObj.dispatch(decrementCounter(id));
    }

    render(){
        console.log(this.props);
        const mappArr = this.props.propsObj.counter;
        return(
            <div>
                {
                    mappArr.map(elem => {
                        return <CounterChild key={elem.id} index={elem.id} obj={elem} onIncrementButtonClick={this.handleIncrementCounter} onDecrementButtonClick={this.handleDecrementCounter}/>
                    })
                }
            </div>
        )
    }
}

export default CounterParent
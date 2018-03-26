import React from 'react';

class CounterChild extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{marginBottom:'10px'}}>
                <button onClick={() => this.props.onDecrementButtonClick(this.props.index)}>-</button>{/*onClick dispatch action decrementCounter*/}
                 <span style={{marginRight: '10px', marginLeft: '10px'}}>{this.props.obj.value}</span>
                <button onClick={() => this.props.onIncrementButtonClick(this.props.index)}>+</button>{/*onClick dispatch action incrementCounter*/}
            </div>
        )
    }
}

export default CounterChild
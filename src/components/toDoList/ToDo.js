import React from 'react';

const ToDo = (props) => {
    return (
        <div className="sbka-div-ek">
            <input type='checkbox' name={props.text} value={props.index} onClick={props.onClick.bind(this)}/>
            <span style={ props.isComplete ? {textDecoration: 'line-through', marginLeft: '30px', marginRight: '30px'} : { marginLeft: '30px', marginRight: '30px' } }>
            {props.text}
            </span>
            <button type="button" onClick={() => props.onButtonClick(props.index)} style={{borderRadius: '50%', width: '15px', height: '15px'}}>
                <span style={{ position: 'relative', top: '-2px', right: '2px'}}>x</span>
            </button>      
        </div>
    )
}

export default ToDo
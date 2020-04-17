import React from 'react';
import bootstrap from '../../../css/bootstrap.module.css';

const Button = (props) => {

    let btnSize = null;
    if (props.btnSize === 'small') {
        btnSize = bootstrap.btnSm
    }
    
    return (
        <button 
            type={props.btnType}
            disabled={props.disabled}
            className={[bootstrap.Button, bootstrap[props.btnClass], btnSize].join(' ')}
            onClick={props.clicked}>
                {props.children}
        </button>
    );
}

export default Button;
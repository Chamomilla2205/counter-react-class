import React from 'react';
import './Buttons.css'
const Buttons = ({onClickChange,result:num,arrButt}) => {

    const handlerClick = (num) => {
        onClickChange(num)
    }

    return (
        <div>
        {
            arrButt.map((value) => <button value = {value} key = {value.id} className={'buttons'} onClick={() => handlerClick(value)}>{value}</button>)
        }
        </div>
    );
}

export default Buttons;

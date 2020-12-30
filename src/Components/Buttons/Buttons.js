import React from 'react';

const Buttons = ({onClickChange,result:num,value}) => {

    const handlerClick = (num) => {
        onClickChange(num)
    }
    return (
        <div>
            <button value = {value} onClick={() => handlerClick(value)}>{value}</button>
        </div>
    );
}

export default Buttons;

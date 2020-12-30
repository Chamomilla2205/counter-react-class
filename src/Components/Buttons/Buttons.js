import React from 'react';

const Buttons = ({onClickChange,result:num}) => {
    const onChange = (num) => {
        onClickChange(num)
    }
        return (
            <div>
                <button onClick={() => onChange(1)}>1</button>
                <button onClick={() => onChange(-1)}>-1</button>
                <button onClick={() => onChange(100)}>100</button>
                <button onClick={() => onChange(-100)}>-100</button>
                <button onClick={() => onChange(-num)}>RESET</button>
            </div>
        );
}

export default Buttons;
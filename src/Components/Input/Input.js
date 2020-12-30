import React from 'react';

const Input = ({onClickNumChange,inputValue,onSubmit}) => {
    const onMySubmit = () => {
        onSubmit()
    }
    const onMyChange = ({target:{value}}) => {
        onClickNumChange(value)
    }
        return (
            <div>
                <input type="number"  name={'someNumber'} onChange={onMyChange} value={inputValue}/>
                <button onClick={onMySubmit}>SUBMIT</button>
            </div>
        );
}

export default Input;
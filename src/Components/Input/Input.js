import React from 'react';
import './Input.css'
const Input = ({onClickChangeNum, inputValue, onSubmit}) => {
    const mySubmit =()=>
        onSubmit();

    const myOnChange =({target:{value}})=>
        onClickChangeNum(value);


    return (
        <div className={'Input'}>
            Число : <input type="number" name={'someNumber'} onChange={myOnChange} value={inputValue}/>
            <button onClick={mySubmit} className={'Input'}>SUBMIT</button>
        </div>
    );

}

export default Input;

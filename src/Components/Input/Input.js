import React from 'react';

const Input = ({onClickChangeNum, inputValue, onSubmit}) => {
    const mySubmit =()=>
        onSubmit();

    const myOnChange =({target:{value}})=>
        onClickChangeNum(value);


    return (
        <div>
            <input type="number" name={'someNumber'} onChange={myOnChange} value={inputValue}/>
            <button onClick={mySubmit}>SUBMIT</button>
        </div>
    );

}

export default Input;

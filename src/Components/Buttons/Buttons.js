import React from 'react';

const Buttons = ({onClickChange}) => {

    const handlerClick = (num) => {
        onClickChange(num)
    }

    return (
        <div>
            <button onClick={() => handlerClick(1)}>1</button>
            <button onClick={() => handlerClick(-1)}>-1</button>
            <button onClick={() => handlerClick(100)}>100</button>
            <button onClick={() => handlerClick(-100)}>-100</button>
            {/*todo тут помилка подумати*/}
            <button onClick={() => handlerClick(-this.state.result)}>RESET</button>
        </div>
    );
}

export default Buttons;

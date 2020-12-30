import React, {Component} from 'react';

class Buttons extends Component {
    render() {
        let {onClickChange} = this.props
        return (
            <div>
                <button onClick={() => onClickChange(1)}>1</button>
                <button onClick={() => onClickChange(-1)}>-1</button>
                <button onClick={() => onClickChange(100)}>100</button>
                <button onClick={() => onClickChange(-100)}>-100</button>
            </div>
        );
    }
}

export default Buttons;
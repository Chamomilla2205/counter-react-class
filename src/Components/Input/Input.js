import React, {Component} from 'react';

class Input extends Component {
    render() {
        let {onClickNumChange,inputValue,onSubmit} = this.props
        return (
            <div>
                <input type="number"  name={'someNumber'} onChange={onClickNumChange} value={inputValue}/>
                <button onClick={onSubmit}>SUBMIT</button>
            </div>
        );
    }
}

export default Input;
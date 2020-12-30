import React, {Component} from 'react';
import Buttons from "../Buttons/Buttons";

class AllComponents extends Component {
    state = {result:0, inputValue: ''}

    onClickChange = (num) => {
        const {result: num1} = this.state;
        let result = num1 + num;
        if (result < 0) {
            result = 0
        } else {
            result
        }

        this.setState({result});
    }

    onClickNumChange = ({target:{value: inputValue}}) => {
        this.setState({inputValue})
    }

    onSubmit = (ev) => {
        let {inputValue,result} = this.state;
        let resultNum = +inputValue + result;
        resultNum < 0
            ? resultNum = 0
            : resultNum
        this.setState({result: resultNum})

        //     this.setState(({inputValue,result})=>{
        //
        //         return {result: result + 5}
        //     })
        // this.setState(({inputValue,result})=>{
        //
        //         return {result: result + 5}
        //     })
        // this.setState(({inputValue,result})=>{
        //
        //         return {result: result + 5}
        //     })
        // this.setState(({inputValue,result})=>{
        //
        //         return {result: result + 5}
        //     })

    }

    render() {
        let {result,inputValue} = this.state

        return (
            <div>
                <h2>Result: {result}</h2>
                <button onClick={() => this.onClickChange(1)}>1</button>
                <button onClick={() => this.onClickChange(-1)}>-1</button>
                <button onClick={() => this.onClickChange(100)}>100</button>
                <button onClick={() => this.onClickChange(-100)}>-100</button>
                <button onClick={() => this.onClickChange(-this.state.result)}>RESET</button>
                    <input type="number"  name={'someNumber'} onChange={this.onClickNumChange} value={inputValue}/>
                    <button onClick={this.onSubmit}>SUBMIT</button>
            </div>
        );
    }
}

export default AllComponents;
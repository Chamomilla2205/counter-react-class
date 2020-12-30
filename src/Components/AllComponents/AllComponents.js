import React, {Component} from 'react';
import Buttons from "../Buttons/Buttons";
import Result from "../Result/Result";
import Input from "../Input/Input";

class AllComponents extends Component {
    state = {result:0, inputValue: ''}

    onClickChange = (num) => {
        const {result: num1} = this.state;
        let result = num1 + num;
        if (result < 0) {
            result = 0
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
                <h2><Result result = {result}/></h2>
                <Buttons onClickChange = {this.onClickChange}/>
                <Input onClickChangeNum = {this.onClickNumChange} inputValue = {inputValue} onSubmit = {this.onSubmit}/>
            </div>
        );
    }
}

export default AllComponents;
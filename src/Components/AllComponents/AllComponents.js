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

    onClickNumChange = (inputValue)=>
        this.setState({inputValue})


    onSubmit = () => {

        let {inputValue,result} = this.state;

        let resultNum = +inputValue + result;

        resultNum < 0
            ? this.setState({result: 0})
            : this.setState({result: resultNum})


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
                <Result result = {result}/>
                <Buttons onClickChange = {this.onClickChange}/>
                <Input onClickChangeNum = {this.onClickNumChange} inputValue = {inputValue} onSubmit = {this.onSubmit}/>
            </div>
        );
    }
}

export default AllComponents;
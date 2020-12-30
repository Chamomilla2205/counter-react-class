import React, {Component} from 'react';

class Result extends Component {
    render() {
        let {result} = this.props
        return (
            <div>
                <h2>Result: {result}</h2>
            </div>
        );
    }
}

export default Result;
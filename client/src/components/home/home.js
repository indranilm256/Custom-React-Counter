import React, {Component} from 'react'
import Counter from '../counter/counter';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            max_value: (process.env.REACT_APP_MAX_VALUE!=null)?process.env.REACT_APP_MAX_VALUE:1000
        };
    }

    handleChange = (newCount) => {
        this.setState({ count : newCount});
    }

    render() {
        return (
            <div style = {{position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'}}>
                <Counter count={this.state.count} max_value={this.state.max_value} onChange={this.handleChange} />
                <span>Counter Value: {this.state.count}</span>
            </div>
         );
    }
}

export default Home;
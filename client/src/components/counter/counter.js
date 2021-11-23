import React, {Component} from 'react'
import axios from '../../axios'
import '../style.css'
import logo from '../loading-buffering.gif'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
            max_value: parseInt(props.max_value),
            isSaving: 0,
            isMaxReached: 0
        };
    }
    
    putCount = () => {
        this.setState({ isSaving : 1});
        let data = {
            indranilm: this.state.count
        };
        axios
            .put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', 
            data,
            {
                headers: {"Content-Type": "application/json"}
            })
            .then(res => {
                const data = res.data
                this.setState({ isSaving : 0});
                this.props.onChange(this.state.count);
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    
    getCount = () => {
        axios
        .get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/indranilm.json', {
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            const data = res.data
            console.log(data)
            if(data == null){
                this.setState({ count : 1 });
                this.props.onChange(1);
            }
            else {
                this.setState({ count : data });
                this.props.onChange(data);
            }
            // this.props.onChange(this.state.count);
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    updateCount = async function(e) {
        if(e.target.value === ""){
            await this.setState({ count : 0})
            this.putCount()
        }
        else if((parseInt(e.target.value) <= this.state.max_value)){
            await this.setState({ count : parseInt(e.target.value)})
            this.setState({ isMaxReached : 0})
            this.putCount()
        }
        else {
            this.setState({ isMaxReached : 1})
        }
    }

    decrement = () => {
        if(this.state.count <= this.state.max_value){
            this.setState({ count : this.state.count-1});
            this.setState({ isMaxReached : 0})
            this.putCount();
        }
    }

    increment = () => {
        if(this.state.count < this.state.max_value){
            this.setState({ count : parseInt(this.state.count, 10)+1});
            this.setState({ isMaxReached : 0})
            this.putCount();
        }
        else {
            this.setState({ isMaxReached : 1})
        }
    }

    componentDidMount(){
        this.getCount();
    }

    renderSave(){
        let {isSaving, isMaxReached} = this.state
        if(!isMaxReached){
            if(isSaving){
                return <span><img className="image" src={logo} alt="loading..." />Saving current value</span>
            }
            else {
                return <span>Value updated</span>
            }
        }
        else {
            return <span>Max value reached!({this.state.max_value})</span>
        }
    }

    render() {
        const { count } = this.state;
        return (
            
        <div class="body1">
            
            {this.renderSave()}
            
            <div>
                <button className="button button1" onClick={this.decrement}>-</button>
                <input 
                type="text" 
                className="textbox"
                value={count}
                onChange={e => this.updateCount(e)}
                />
                <button className="button button2" onClick={this.increment}>+</button>
            </div>
        </div>
        )
    }
}

export default Counter
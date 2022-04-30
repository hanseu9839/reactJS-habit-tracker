import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count : 0,
    };
    handleIncrement = ()=>{
        // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 한다. 
        //this.state.count += 1; 이런식으로 object state를 그냥 증가 시키게 되면 React는 값이 업데이트가 되었는지 모른다. 
        this.setState({count:this.state.count + 1}); // 반드시 setState를 호출해야 한다.
    }
    handleDecrement = ()=>{
        const count = this.state.count - 1;
        this.setState({count:count < 0 ? 0 : count}); // 반드시 setState를 호출해야 한다.
    }

    render() {
        return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fa-solid fa-circle-plus"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                 <i className="fa-solid fa-circle-minus"></i>
            </button>
            <button className="habit-button habit-delete">
                 <i className="fa-solid fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;
import React, { Component } from 'react';
import './TrafficLight.css';
import className from 'classnames';

const RED = 0;
const GREEN = 1;
const YELLOW = 2;

class TrafficLight extends Component{
    constructor(){
        super();
        this.state = {
            currentColor : RED,
        }

        setInterval(() => {
            this.setState({
                currentColor : this.getNextColor(this.state.currentColor)
            });
        }, 2000);
    }

    getNextColor(color){
        switch (color) {
            case RED:
                return GREEN;
            case GREEN:
                return YELLOW;
            default:
                return RED;
        }
    }

    render(){
        return(
            <div className="TrafficLight">
                <div className={className('light', 'red', {
                    'active' : this.state.currentColor === RED
                })}></div>
                <div className={className('light', 'green', {
                    'active' : this.state.currentColor === GREEN
                })}></div>
                <div className={className('light', 'yellow', {
                    'active' : this.state.currentColor === YELLOW
                })}></div>
            </div>
        );
    }
}

export default TrafficLight;
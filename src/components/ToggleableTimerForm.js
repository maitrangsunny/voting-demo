import React, { Component } from 'react';
import { TimerForm } from './TimerForm';

export class ToggleableTimerForm extends Component {
    render(){
        if(this.props.isOpen){
            return(
                <TimerForm/>
            );
        }else {
            return(
                <button>
                    Toggle
                </button>
            )
        }
        
    }
}
import React, { Component } from 'react';
import { TimerForm } from './TimerForm';

export class ToggleableTimerForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isOpen: false
      }
    }
    
    
    handleFormOpen = () =>{
        this.setState({
            isOpen: true
        });
    }

    handleFormClose = () => {
        this.setState({
            isOpen: false
        });
    }

    handleFormSubmit = (timer) =>{
        this.props.onFormSubmit(timer);
        this.setState({
            isOpen: false
        })
    }
    render(){
        if(this.state.isOpen){
            return(
                <TimerForm onFormSubmit = {this.handleFormSubmit}
                            onFormClose = {this.handleFormClose}/>
            );
        }else {
            return(
                <button onClick={this.handleFormOpen}>
                    Toggle
                </button>
            )
        }
        
    }
}
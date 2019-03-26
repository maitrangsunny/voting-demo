import React, { Component } from 'react';
import { TimerForm } from './TimerForm';
import { Timer } from './Timer';

export class EditableTimer extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
         editFormOpen: true
      }
    }
    
    render(){
        if(this.state.editFormOpen){
            return(
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}/>
            )
        }else {
            return(
                <Timer
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    />
            )
            
        }
        
    }
}
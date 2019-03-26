import React, { Component } from 'react';
import { EditableTimerList } from './EditableTimerList';
import { ToggleableTimerForm } from './ToggleableTimerForm';

export class TimersDashBoard extends Component {
    render(){
        return(
            <div>
                <EditableTimerList/>
                <ToggleableTimerForm 
                    isOpen={true}
                    onFormSubmit
                />
            </div>
        )
    }
}
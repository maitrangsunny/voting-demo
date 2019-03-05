import React, { Component } from 'react';

export class TimerForm extends Component {
    render(){
        const submitText= this.props.title?'Update':'Create';
        return(

            <div>              
                <div className="form">
                    <div className="field">
                        <label>Title</label>
                        <input type="text" defaultValue={this.props.title}/>
                    </div>
                    <div className="field">
                        <label>Project</label>
                        <input type="text" defaultValue={this.props.project}/>
                    </div>
                    <div className="buttons">
                        <button className="blue-button">
                            {submitText}

                        </button>
                        <button className="default-button">
                            Cancel
                        </button>
                        <br/>

                    </div>
                </div>
            </div>
        )
    }
}
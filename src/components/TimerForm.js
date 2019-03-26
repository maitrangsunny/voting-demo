import React, { Component } from 'react';

export class TimerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title || " ",
            project: this.props.project || " "
        }
    }
    handleChangeTitle = (e)=>{        
        this.setState({
            title: e.target.value
        });
        console.log(this.state.title);

    }

    handleProjectChange = (e) =>{
        this.setState({
            project: e.target.value
        });
        console.log(this.state.project);
    }
    handleSubmit(){
        console.log(111);
    }
    render(){
        const submitText= this.props.title?'Update':'Create';
        return(    
            <div className="form">
                <div className="field">
                    <label>Title</label>
                    <input type="text" 
                            defaultValue={this.state.title}
                            onChange={this.handleChangeTitle}
                    />
                </div>
                <div className="field">
                    <label>Project</label>
                    <input type="text" 
                            defaultValue={this.state.project}
                            onChange={this.handleProjectChange}
                    />
                </div>
                <div className="buttons">
                    <button className="blue-button" onClick={this.handleSubmit}>
                        {submitText}
                    </button>
                    <button className="default-button">
                        Cancel
                    </button>
                    <br/>

                </div>
                <hr/>
            </div>

        )
    }
}
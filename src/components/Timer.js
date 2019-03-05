import React, { Component } from 'react';
import moment from 'moment';

export class Timer extends Component {
    render(){        
        console.log(this.props.elapsed);
       
        return(
            <div className="content">
                <div className="header">
                    {this.props.title}
                </div>
                <div className="meta">
                    {this.props.project}
                </div>
                <div className="description">
                    <h4>{moment.unix(this.props.elapsed).format("HH:mm:ss")}</h4>
                </div>
                <div className="buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Start</button>
                    <br/>

                </div>
                <hr/>
               
            </div>
        )
    }
}
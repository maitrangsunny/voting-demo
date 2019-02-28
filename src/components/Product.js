import React, { Component } from 'react';

export class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.handleUpVote = this.handleUpVote.bind(this);
    }
    
    
    handleUpVote(){
        this.props.onVote(this.props.id);
    }
    
    render(){
        return(
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} alt=""/>
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        {this.props.b}

                    </div>
                    <div className="description">
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                        <a>{this.props.votes}</a>
                        <button  onClick={this.handleUpVote}>Tăng lượt</button>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img className="ui avatar image" src={this.props.submitterAvatarUrl} alt=""/>

                    </div>
                </div>
            </div>
        )
    }
}
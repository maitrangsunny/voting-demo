import React, { Component } from 'react';
import { Product } from './Product';

export class ProductList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            products:[]
        }
        this.data = [
            {
                id: 1,
                title: 'Yellow Pail',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
            //   votes: generateVoteCount(),
                submitterAvatarUrl: 'https://via.placeholder.com/50',
                productImageUrl: 'https://via.placeholder.com/50',
            
            },
            {
                id: 2,
                title: 'Yellow Pail 2',
                description: 'On-demand sand castle construction expertise. On-demand sand castle construction expertise.',
                url: '#',
            //   votes: generateVoteCount(),
                submitterAvatarUrl: 'https://via.placeholder.com/50',
                productImageUrl: 'https://via.placeholder.com/50',
        
            },
        ]
    }

    componentDidMount(){
        this.setState({
            product: this.data
        });
        console.log(this.state.product);
    }

    handleProductUpVote(productId){
        console.log(productId + " was upvoted!");
    }
    
    render(){
        
        const productComponents = this.data.map((product, index)=>{
            return(
                <Product key={index}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}                    
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                    onVote = {this.handleProductUpVote}
                />
            )
        });
        return(
            <div>               
                {productComponents}                
            </div>
        )
    }
}
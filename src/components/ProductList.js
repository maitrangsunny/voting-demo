import React, { Component } from 'react';
import { Product } from './Product';

export class ProductList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            products:[],
        }
        this.data = [
            {
                id: 1,
                title: 'Yellow Pail',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: 0,
                submitterAvatarUrl: 'https://via.placeholder.com/50',
                productImageUrl: 'https://via.placeholder.com/50',
            
            },
            {
                id: 2,
                title: 'Yellow Pail 2',
                description: 'On-demand sand castle construction expertise. On-demand sand castle construction expertise.',
                url: '#',
                votes: 1,
                submitterAvatarUrl: 'https://via.placeholder.com/50',
                productImageUrl: 'https://via.placeholder.com/50',
        
            },
        ]
        this.handleProductUpVote=this.handleProductUpVote.bind(this);
    }

    componentDidMount(){
        console.log("11");
        this.setState({
            products: this.data
        });
        console.log(this.state.products);
    }

    handleProductUpVote(productId){
        console.log(productId + " was upvoted!");
        const products = this.state.products;
        const nextProducts = this.state.products.map((product)=>{
            if(products.id === productId){
                return Object.assign({},product,{
                    votes: product.votes + 1
                })
               
            }else {
                return products;
            }
        })
       
        this.setState({
            products: nextProducts

        })
    }
    
    render(){
      
        const productComponents = this.data.map((product, index)=>{
            return(
                <Product key={index}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    votes={product.votes}
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
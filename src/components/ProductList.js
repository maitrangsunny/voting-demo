import React, { Component } from 'react';
import { Product } from './Product';

export class ProductList extends Component {
    constructor(props) {
        super(props);
        
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
        this.setState({
            products: this.data
        });
    }

    handleProductUpVote(productId){
        const cloneData = this.state.products.map(product=>{
           if(productId === product.id){
               return Object.assign({},product,{
                   votes: product.votes + 1,
               });
           }else {
               return product;
           }
       });
       this.setState({
           products: cloneData
       });
    }
    
    render(){     
        const productComponents = this.state.products.map((product, index)=>{
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
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import GeneralData from './Data/GeneralData';
import StarRating from './StarRating';

export class General extends Component {
    
    render() {
        return (
            <div className="content">
            <ul className="products">
                {
                GeneralData.products.map(product => 
                <li key={product._id}>
                    <div className="product">
                    <Link to={'/Product/' + product._id}>
                        <img className="product-image" src ={product.images} alt="bag"/>
                        </Link>
                        <div className="product-name"><Link to={'/Product/' + product._id}>{product.name}</Link></div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">Ksh.{product.price}</div>
                        <div className="product-rating"><StarRating/>({product.numReviews} Reviews)</div>
                        </div>
    
                </li>    
                )
                    }
                
            </ul>
        </div>
        )
    }
}

export default General

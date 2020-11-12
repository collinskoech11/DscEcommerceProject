import React, { Component, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import StarRating from './StarRating';
import axios from 'axios';

export class General extends Component {
    const [products, setProduct] ; useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const {data} = await axios.get("/backend/Data");
            setProduct(data);
        }
        fetchData();
        return () => {
           
        }
    }, []);
    
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

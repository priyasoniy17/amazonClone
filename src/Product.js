import { Rating } from '@mui/material'
import React ,{useContext} from 'react'
import "./css/Product.css"
import Products from "./Products.json"
import {CartContext} from './CartContext'


function Product() {
  const {addtocart,increment} =  useContext(CartContext);
  

  return (
    <div className="products_wrap">
      {
        Products.map(Products=> {
          return(
            <div key={Products.id} className="product">
              <div className="product_image">
                <img  className="image"src={Products.image}  alt=""/>
              </div>
            <div className="product_title">
              {Products.title}
            </div>
            <div className="type">
              {Products.type}
            </div>
            <div className="product_description">
              {Products.description}
            <div className="product_rating">
              <Rating name="read-only" value={Products.rating} readOnly/>

            </div>
            <div className="product_price">
              <b>₹</b>
              {Products.price}

            </div>
            <div className="product_quantity">
              <i class="fas fa-minus minus "></i>
              <input type="text" placeholder="1"/>
              
              
              <i class="fas fa-plus add"></i> 

            </div>
            <button className="product_button" onClick={() => addtocart(Products)}
> Add to Cart</button>

            </div>
            
            </div>
              
          )
        })
      }
      
      
    </div>
  )
}

export default Product

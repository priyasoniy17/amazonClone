import React , { useContext } from 'react'
import { CartContext } from './CartContext'
import "./css/ShoppingCart.css"

function ShoppingCart() {

    const {item_cart,totalAmount, emptyCart,totalItem,removefromcart} = useContext(CartContext);
  return (
    <div className="checkout">
        <div className="checkout__left">
            <div>
                <h3> Hello guest</h3>
                <h2 className="checkout__title"> Your Shopping Basket</h2>
                <div className="checkout_Product">

                {item_cart.map(item => { 
                    return (
                    <div className='checkout_item' key = {item.id} >
                        
                        <img src={item.image} alt="" className="cartItem_image" />

                        <div className="cartItem_detail">
                        <p className="cartItem_title">
                            <b>{item.title}</b>
                        </p>
                        <div className="cartItem_price">
                            <small><b>₹</b></small>
                            <strong>{item.price}</strong>
                        </div>
                        <button  className="remove_button"onClick={() => removefromcart(item.id)}>Remove From Cart</button>
                        
                        
                        </div>
                        
                    </div>
                )})}

                    

                </div>
                
            </div>
            

                

        </div>

        <div className="checkout_right">
            <div className="subtotal">
            <p> Subtotal({totalItem()}): <strong>Rs.{totalAmount()}</strong></p>
            
            <div>
            <button  className="empty_buton" onClick={() => emptyCart()}>Empty Cart</button>
            </div>
            

            </div>
        </div>

        

     
    </div>
  )
}

export default ShoppingCart

import React ,{useContext}from 'react'
import { CartContext } from './CartContext'
import "./css/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';


function Header() {
    const {item_cart,totalAmount,emptyCart,totalItem,removefromcart}=useContext(CartContext);
  return (
    <>
    <div className="header">

        <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HU4Gu-b_CtjPRqbjIZ6DeFcAoH-EFypP0JzKc6MhZv1p_hJqS3XxEbE1DhMv9MIWcEI&usqp=CAU" className="header__logo"/>
        </Link>
        <div className="header__search">
            <input type="text"/>
            <SearchIcon className="header__searchicon"/>

        </div>

        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionone"> Hello Guest</span>
                <span className="header__optiontwo"> Sign In</span>

            </div>
            <div className="header__option">
                <span className="header__optionone"> Return</span>
                <span className="header__optiontwo"> & Orders</span>

            </div>
            <div className="header__option">
                <span className="header__optionone"> Your</span>
                <span className="header__optiontwo"> Prime</span>

            </div>
            <div className="header__shoppingcart">
                <Link to="/cart">
                <ShoppingCartIcon/>

                <span> 
                    {totalItem()}
                    </span>
                </Link>
            </div>

        </div>

      
    </div>
    <div className="header_bottom">
        <ul>
            <li> All </li>
            <li> Mobile</li>
            <li > Computers</li>
            <li> Category</li>
            <li> Shoes</li>
            <li> Electronics</li>
            <li> Kitchen</li>
            <li> Fashion</li>
            <li> Jewellery</li>
            <li>Beauty&coesmatics</li>
            <li> Bags</li>
            <li> Stationery</li>
        </ul>

    </div>
    </>

  )
}

export default Header

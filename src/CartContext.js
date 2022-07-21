import React ,{createContext,Component} from 'react'
import Product from './Product';
import Products from "./Products.json"

export const CartContext = createContext();

let exist_cart=localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) :[];
let cart_size=exist_cart.length;

class CartContextProvider extends Component{

    state={
        item:Product,
        item_cart:exist_cart,
    }

     removefromcart=(product_id)=>{
        console.log(product_id)
         let item_arr=this.state.item_cart.filter(items=> items.id!=product_id)
         console.log(item_arr)
         this.setState({item_cart:item_arr});
         this.setState({totalItem: this.state.item_cart.length})
         
         this.saveToLocalCache();
         console.log('cart product', this.state.item_cart);
     }

    addtocart=(product)=>{
        let itemList=this.state.item_cart;
        itemList.push(product)
        this.setState({item_cart:itemList});
        this.setState({totalItem:this.state.item_cart.length})
        this.saveToLocalCache();
        console.log('cart product', this.state.item_cart);
    };


    totalAmount=()=>{
        let price=0;
        for(let i=0;i<this.state.item_cart.length;i++){
            price+=parseInt(this.state.item_cart[i].price);
        }

        this.saveToLocalCache();
        return price;
    }

    totalItem=()=>{
        let item_list=this.state.item_cart.length;
        
        this.saveToLocalCache();
        return item_list;

    }

    

    emptyCart = () => {
        
        let item_list = [];
        this.setState ( {item_cart: item_list});
        this.setState( {totalItem: this.state.item_cart.length})

        this.saveToLocalCache();
        console.log('cart product', this.state.item_cart);
     
     }

   

     saveToLocalCache = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.item_cart))
    };

    render() {
        return(
            <CartContext.Provider
            value={{
                item:this.state.item,
                totalItem:this.totalItem,
                item_cart:this.state.item_cart,
                addtocart:this.addtocart,
                totalAmount:this.totalAmount,
                removefromcart:this.removefromcart,
                emptyCart:this.emptyCart,
                updatedcart:this.updatedcart
                
                
            }}>
                { this.props.children}
            </CartContext.Provider>
        )
    }

}
export default CartContextProvider

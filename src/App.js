import Header from "./Header";
import Product from "./Product";
import { useEffect,useState } from "react";
import CartContextProvider from './CartContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ShoppingCart from "./ShoppingCart.js";



   

       

      



function App() {
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="banner">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/UnrecHeros/MI/Mi_Tallhero_3000x1200._CB636198423_.jpg"/>
            </div>
            <Product/>
          </Route>
          <Route exact path="/cart">
            <ShoppingCart/>
          </Route>
      </Switch>
      </CartContextProvider>
      
        
      </div>
    </Router>
  );
}

export default App;

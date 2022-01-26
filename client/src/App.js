import './App.css';
import ProductList from './ProductList.js';
import Header from './Header.js';
import Account from './Account.js';
import Navbar from './Navbar.js';
import Cart from './Cart.js';
import { useEffect, useState } from 'react';

function App() {

  const [ products, setProducts ] = useState( [] )
  
    useEffect( 
      ()=>{        
        // fetch("http://localhost:3000/products")
        fetch("https://cataas.com/api/cats?tags=cute")
        .then( r => r.json() )
        .then(
        (fetchedProductsArray)=>{
          // console.log("fetchedProductsArray: ", fetchedProductsArray) 
        setProducts( [ ...fetchedProductsArray ] )
          }
        )
      }
    , [] )

  return (
    <div className="App">
      <Account />
      <Navbar />
      <Header />
      <ProductList
       products={products}
       />
       <Cart />
    </div>
  );
}

export default App;

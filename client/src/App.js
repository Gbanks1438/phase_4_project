import './App.css';
import ProductList from './ProductList.js';
import Header from './Header.js';
import Account from './Account.js';
import Navbar from './Navbar.js';
import Cart from './Cart.js';
import { useEffect, useState } from 'react';

function App() {

  const [ productsArray, setProducts ] = useState( [] )
  
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

    const [shoppingCartArray, setShoppingCartArray] = useState([]);

    function productCardClicked(eachProduct) {
      console.log("A product was clicked: ", eachProduct.id)
      let checkForDupes = shoppingCartArray.find((aProduct)=>{return aProduct.id === eachProduct.id})
        if (checkForDupes === undefined) 
          {setShoppingCartArray([...shoppingCartArray, eachProduct])
        } else 
          {console.log("Product is already in the cart!");}
        }

    const removeCardFromCart =(eachProduct)=>{  
        const removeProduct = shoppingCartArray.filter(
          (oneProduct)=>{
            return eachProduct.id !== oneProduct.id
          }
        )
        setShoppingCartArray(removeProduct)
      }

  return (
    <div className="App">
      <Account />
      <Navbar />
      <Header />
      <ProductList 
      productsArray={productsArray}
      productCardClicked={productCardClicked}
      />
      <Cart
      shoppingCartArray={shoppingCartArray}
      productCardClicked={productCardClicked}
      removeCardFromCart={removeCardFromCart}
      />
    </div>
  );
}

export default App;

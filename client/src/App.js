import './App.css';
import Cart from './Cart.js';
import Header from './Header.js';
import Account from './Account.js';
import { useEffect, useState } from 'react';

function App() {

  // const [ products, setProducts ] = useState( [] )
  //   useEffect( 
  //     ()=>{        
  //       fetch("http://localhost:3000/products")
  //       .then( r => r.json() )
  //       .then(
  //       (fetchedProductsArray)=>{console.log("fetchedProductsArray: ", fetchedProductsArray) 
  //       // setProducts( [ ...fetchedProductsArray ]  )
  //         }
  //       )
  //     }
  //   , [] )

  return (
    <div className="App">
    <br/>
      <Header />
      {/* <Cart products={products}/> */}
      <Account />
    </div>
  );
}

export default App;

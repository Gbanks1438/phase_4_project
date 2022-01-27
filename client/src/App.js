import './App.css';
import ProductList from './ProductList.js';
import Header from './Header.js';
import Account from './Account.js';
import Navbar from './Navbar.js';
import Cart from './Cart.js';
// import Login from './Login.js';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

function App() {

  const [productsArray, setProducts] = useState( [] )
  const [shoppingCartArray, setShoppingCartArray] = useState([]);
  const [user, setUser] = useState(null);

    useEffect( 
      ()=>{        
        fetch("/products", {
          mode: 'cors',
          headers: {'Access-Control-Allow-Origin':'*'}
        })
        .then( r => r.json() )
        .then(
        (fetchedProductsArray)=>{
        setProducts( [ ...fetchedProductsArray ] )
          }
        )
      }
    , [] )

  //   // auto-login version
  //     useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;

        // //v2
    useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

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
      <Navbar />

      <Routes>

        <Route path='/account' element={<Account setUser={setUser}/>} />

        <Route path='/' element={<Header />} />
        
        <Route path='/products' element={
          <ProductList 
          productsArray={productsArray}
          productCardClicked={productCardClicked}
          />
        } />
   
        <Route path='/cart' element={
          <Cart
          shoppingCartArray={shoppingCartArray}
          productCardClicked={productCardClicked}
          removeCardFromCart={removeCardFromCart}
          />
        } />

      </Routes>

    </div>
  );
}

export default App;

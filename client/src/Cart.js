import ProductCard from './ProductCard.js';
import logo from './Images/shop-logo.jpeg';
import { useState } from 'react';

function Cart({shoppingCartArray, removeCardFromCart}) {

    function removedFromCart(eachProduct) {
        removeCardFromCart(eachProduct)
    }

    const [id, setId] = useState("");
    const [date_of_sale, setDate_of_sale] = useState("");
    const [total, setTotal] = useState("");

    function buyButtonClicked() {
      console.log("Buy button was clicked!")
  
        const sale = { id, date_of_sale, total };

        fetch("/sales", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(sale)
        }).then(() => {
            console.log("A new sale was added");
        })

        // HOW TO MAKE IT RENDER AN EMPTY CART AFTER?
        return (
          <Cart />
        )
    }

  //   const buyBtn = document.querySelector("#buy-button")

  //     buyBtn.addEventListener("click", () => {
  //   alert("Enjoy your creatures responsibly 👾");
  // })

    return (
    <div className="Cart">
     <img src={logo} className="App-logo" alt="Product list logo" />
    {
      shoppingCartArray.map((eachProduct)=>{
        return <ProductCard
          key={eachProduct.id} 
          eachProduct={eachProduct}
          productCardClicked={removedFromCart}
          />
        })
      }
      <br/>
      <h1>Checkout:</h1>
      <div>Cart Total = ?</div>
      <br/>
      <button onClick={() => 
                buyButtonClicked()} 
                id="buy-button">Buy</button>
    </div>
  );
}

export default Cart;
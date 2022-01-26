import logo2 from './Images/shopping-cart-logo.png';
import ProductCard from './ProductCard.js';

function Cart({shoppingCartArray, removeCardFromCart}) {

    function removedFromCart(eachProduct) {
        removeCardFromCart(eachProduct)
    }

    function buyButtonClicked() {
      console.log("Buy Button Pressed")
    }

    return (
    <div className="Cart">
    <img src={logo2} className="App-logo" alt="Shopping cart logo" />
    <h2>Checkout</h2>
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
      <button onClick={() => 
                buyButtonClicked()
                }>Buy</button>
    </div>
  );
}

export default Cart;
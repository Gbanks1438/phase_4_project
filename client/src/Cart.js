import logo from './Images/shop-logo.jpeg';
import Card from './Card.js';

function Cart({products}) {
    return (
        <div>
             <img src={logo} className="App-logo" alt="logo" />

        {products.map((eachProduct)=>{
                     return ( 
                         <div> 
                     <Card
                        key={eachProduct.id} // For React
                        aProduct={eachProduct} // For Us
                     
                        />
                        </div>  
                        )
                     }   )
                 }
        </div>
    );
    }
    
    export default Cart;
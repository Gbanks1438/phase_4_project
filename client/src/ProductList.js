import logo from './Images/shop-logo.jpeg';
import Card from './Card.js';

function ProductList(
    {products}
    ) {
    return (
        <div>
             <img src={logo} className="App-logo" alt="Product list logo" />
        {products.map((eachProduct)=>{
                     return ( 
                         <div> 
                     <Card
                        key={eachProduct.id} // For React
                        eachProduct={eachProduct} // For Us
                        />
                        </div>  
                        )
                     }   )
                 }
        </div>
    );
    }
    
    export default ProductList;
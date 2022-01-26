import logo from './Images/shop-logo.jpeg';
import ProductCard from './ProductCard.js';

function ProductList({productsArray, productCardClicked}) {

    return (
        <div>
        <img src={logo} className="App-logo" alt="Product list logo" />
        {productsArray.map((eachProduct)=>{
            return ( 
                <div> 
                <ProductCard
                key={eachProduct.id} // For React
                eachProduct={eachProduct} // For Us
                productCardClicked={productCardClicked}
                />
                </div>  
                )
            } )
        }
        </div>
    );
    }
    
    export default ProductList;
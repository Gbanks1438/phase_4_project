import ProductCard from './ProductCard.js';

function ProductList({productsArray, productCardClicked}) {

    return (
        <div>
        <h2>Available Creations:</h2>
        {productsArray.map((eachProduct)=>{
            return ( 
                <div className="Product-card"> 
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
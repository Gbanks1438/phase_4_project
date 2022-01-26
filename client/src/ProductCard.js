import image from './Images/Manhatoobly.jpeg';

function ProductCard({eachProduct, productCardClicked}) {

    return (
        <div className="Card-div" 
        onClick={() => 
        productCardClicked(eachProduct)
        }>
            <img src={image} className="Image" alt="Manhatoobly" />
            {/* <img src={eachProduct.image_url} className="Image" alt="Product listing" /> */}

            <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Brand:</th>
                        <th>Price:</th>
                        <th>Category:</th>
                        <th>SKU:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        {eachProduct.id}
                        {/* {eachProduct.name} */}
                        </td>
                        <td>
                        {eachProduct.tags}
                        {/* {eachProduct.brand} */}
                        </td>
                        <td>
                        {eachProduct.id}
                        {/* {eachProduct.price} */}
                        </td>
                        <td>
                          {eachProduct.tags}
                        {/* {eachProduct.category} */}
                        </td>
                        <td>
                         {eachProduct.id}
                        {/* {eachProduct.product_sku} */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    }
    
export default ProductCard;
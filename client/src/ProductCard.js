function ProductCard({eachProduct, productCardClicked}) {

    return (
        <div className="Card-div" 
        onClick={() => 
        productCardClicked(eachProduct)
        }>
            <img src={eachProduct.image_url} className="Image" alt="Product listing" />

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
                        {eachProduct.name}
                        </td>
                        <td>
                        {eachProduct.brand}
                        </td>
                        <td>
                        {eachProduct.price}
                        </td>
                        <td>
                        {eachProduct.category}
                        </td>
                        <td>
                        {eachProduct.product_sku}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    }
    
export default ProductCard;
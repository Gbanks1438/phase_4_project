function Card({aProduct}) {
    return (
        <div>
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
                        <td>{aProduct.name}</td>
                        <td>{aProduct.brand}</td>
                        <td>{aProduct.price}</td>
                        <td>{aProduct.category}</td>
                        <td>{aProduct.product_sku}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    }
    
export default Card;
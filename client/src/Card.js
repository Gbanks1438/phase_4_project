import image from './Images/Manhatoobly.jpeg';
import { useState } from 'react';

function Card({eachProduct}) {

      const [shoppingCartArray, setShoppingCartArray] = useState([]);

        function ProductFromListClicked(eachProduct) {
            console.log("A product was clicked: ", eachProduct.id)
            let checkForDupes = shoppingCartArray.find((aProduct)=>{return aProduct.id === eachProduct.id})
                if (checkForDupes === undefined) 
                    {setShoppingCartArray([...shoppingCartArray, eachProduct])
                    console.log("Did we setShoppingCartArray? ", setShoppingCartArray)
                    // return ( 
                    //     <div> 
                    //         <Card
                    //         key={eachProduct.id} // For React
                    //         eachProduct={eachProduct} // For Us
                    //         />
                    //     </div>  
                    // )
                    }
                else 
                    {console.log("Product is already in the cart!");}
        }

    return (
        <div className="Card-div" onClick={() => ProductFromListClicked(eachProduct)}>
        <img src={image} className="Image" alt="Manhatoobly" />
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
    
export default Card;
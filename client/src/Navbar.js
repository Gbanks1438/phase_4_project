// import { Link } from "react-router-dom";

function Navbar() {
 return (
        <div className="Navbar">
        <nav>
            <ul>
                <li className='nav-links'>Account</li>
                <li className='nav-links'>Home
                    {/* <Link to='/'>Home</Link> */}
                </li>
                <li className='nav-links'>Cart
                    {/* <Link to='/shopping_cart'>Cart</Link> */}
                </li>
            </ul>
        </nav>
        </div>
        );
    }
export default Navbar;

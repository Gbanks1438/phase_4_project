// import { NavLink } from "react-router-dom";

function Navbar() {
    
 return (
        <div className="Navbar">
        <nav>
            <ul>
                <li className='nav-links'>Account</li>
                <li className='nav-links'>Home
                    {/* <NavLink to='/'>Home</NavLink> */}
                </li>
                <li className='nav-links'>Cart
                    {/* <NavLink to='/shopping_cart'>Cart</NavLink> */}
                </li>
            </ul>
        </nav>
        </div>
        );
    }

export default Navbar;

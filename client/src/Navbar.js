import logo2 from './Images/shopping-cart-logo.png';
import { NavLink } from "react-router-dom";

function Navbar() {

 return (
        <div className="Navbar">
        <header>
        <nav>
            <ul>
                <li className='nav-links'>
                    <NavLink to='/account'>Account</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                   <li className='nav-links'>
                    <NavLink to='/products'>Creations</NavLink>
                </li>
                <li className='nav-links'>
                <br/> <br/>
                    <NavLink to='/cart'><img src={logo2} className="App-logo" alt="Shopping cart logo" /></NavLink>
                </li>
            </ul>
        </nav>
        <br/><br/><br/> <br/><br/><br/><br/>
        </header>
        </div>
        );
    }

export default Navbar;

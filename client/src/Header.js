// import { Link } from "react-router-dom";

function Header() {
    return (
    <div>
        <header className="App-header">
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
    <h1>Welcome To Grampleton Imports</h1>
    <h2>"For all of your 'Woobly-esque' needs" - since 2022.</h2>
    <span>We carry several brands of the latest Glerms, Gricks, Groks, and Gringods.</span> 
    <span>Sign in or create an account to make a purchase.</span>
    <span>View our complete product listing below.</span>
        </header>
    </div>
       );
    }
    
    export default Header;
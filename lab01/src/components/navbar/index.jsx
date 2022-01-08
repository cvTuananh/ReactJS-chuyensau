import {Link} from 'react-router-dom';
import './style.css'
function navbar() {
    return ( 
        <nav>
        <ul>
            <li>
                <Link to="/" className='menu-item'>Home</Link>
            </li>
            <li>
            <Link to="/about"className='menu-item'>About</Link>
            </li>
            <li>
            <Link to="/contact"className='menu-item'>Contact</Link>
            </li>
            <li>
            <Link to="/product"className='menu-item'>Product</Link>
            </li>
        </ul>
    </nav>
     );
}

export default navbar;
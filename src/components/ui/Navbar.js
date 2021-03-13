import React from 'react';
import { Link } from 'react-router-dom';
import BookContextProvider from '../../contexts/BookContext';
import logo from '../../img/itbookstorelogo.png'
import Searchbar from './Searchbar';

const Navbar = () => {

    return ( 
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> <img src={logo} alt='logo' /> </Link>
                <i className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </i>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"> About </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/freebook"> Free eBooks </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            <BookContextProvider>
                <Searchbar />
            </BookContextProvider>
        </nav>
     );
}
 
export default Navbar;
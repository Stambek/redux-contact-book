import React from 'react';
import {Limk, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbark-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand text-light">
                    Contact Book
                </Link>
                <div>
                    <Link to="/contacts/add" className="btn btn-light ml-auto">Create Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

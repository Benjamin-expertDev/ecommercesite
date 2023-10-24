import React from "react";
import "./Navbar.css"
import { FaSearch, FaBars, FaSpinner, FaAngleDown } from 'react-icons/fa';

export default function Navbar() { 
    return (
        <div className="nav">
        <button className="nav-button">
        <nav className="accessories">
                <nav className="access">straps</nav><FaAngleDown size={20} color="black" /></nav>
        </button>
        <button className="nav-button">
            <nav className="accessories">
                <nav className="access">accessories</nav><FaAngleDown size={20} color="black" /></nav>
            
        </button>
        <nav> <FaSpinner className="spinner" />Prostraps</nav>

        <button className="nav-button">
            <nav className="search">Search... <nav className="search-icon"><FaSearch size={15} color="black" /></nav></nav>
        
        </button>
        <button className="nav-button-cart">cart</button>
        <h5>Menu</h5>
        <FaBars size={15} color="black" />

        </div>
    )
         

    
}
import React from "react";
import "./Main.css"
import { FaApple, FaGooglePlay, FaSpinner, FaStepForward, FaAngleDown } from 'react-icons/fa';
import watch from "../assets/images/watch.jpg"

export default function Main(){
    return(
    <div className="main">
        <nav>
        <nav className="main-place">
        <button className="main-button">back to home</button>
        <nav>
        <FaApple size={14} color="black" />
            <FaGooglePlay size={14} color="gblack" />
        </nav>        
        
        </nav>
        <nav className="product">
            <nav>
                <h1>legacy steel</h1>
            <h1><FaSpinner className="spinner" />black sport pro</h1>
            <h1>strap</h1>
            </nav>
            <p>product of this week</p>
            
            
        </nav>
        <p>legacy black sport band for apple watch made from a custom-developed silicone and designed for whatever life throws on it</p>
        <button className="main-button">$49.99</button>
        <button className="main-button-add">add to cart <FaStepForward size={13} color="black" /></button>
       <nav className="lower-buttons">
        <nav>
            <button className="details-button">details<button className="more">...</button>  <FaAngleDown size={20} color="black" className="details" /></button>
            </nav>
        <button className="reviews-button">reviews</button>
        <button className="delivery-button">delivery</button>
        </nav>
         </nav>
         <img src={watch} alt="watch" />
    </div>
    )
}
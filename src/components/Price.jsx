import React from "react"
import "../components/Price.css"
import MainButton from "./common/MainButton";
import {FaStepForward} from 'react-icons/fa';
import product from "../assets/images/product.png"

export default function Price(){
    return(
        <div className="price">
            <nav className="span">
            <p>legacy black sport band for apple watch made</p><p> from a custom-developed silicone and designed </p><p>for whatever life throws on it</p> 
            <nav className="price-button"> 
            <MainButton name = "$49.99"/>
            <button className="main-button-add">add to cart <FaStepForward size={13} color="black" /></button>
            </nav>
            </nav>
            <nav>
                <div>
                <img src={product} alt="product" />  
                <p className="span-product">products</p>
                <button className="main-button-addm">+</button>
                <p>reviews</p>
                </div>
                <>
                <p>frame style 01</p>
                <p className="span-product">product body style 02</p>
                <p className="span-product">test on wrest 03</p>
                </>
            </nav>
            
        </div>
    )
}
import React from "react"
import "../components/Price.css"
import MainButton from "./common/MainButton";
import {FaStepForward} from 'react-icons/fa';

export default function Price(){
    return(
        <div className="price">
            <nav className="span">
            <p>legacy black sport band for apple watch made from a custom-developed silicone and designed for whatever life throws on it</p> 
            <nav className="price-button"> 
            <MainButton name = "$49.99"/>
            <button className="main-button-add">add to cart <FaStepForward size={13} color="black" /></button>
            </nav>
            </nav>
            
        </div>
    )
}
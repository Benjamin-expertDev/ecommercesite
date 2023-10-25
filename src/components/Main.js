import React from "react";
import "./Main.css"
import { FaApple, FaGooglePlay, FaStepForward, FaAngleDown } from 'react-icons/fa';
import watch from "../assets/images/watch.jpg"
import MainButton from "./common/MainButton";
import Strap from "../assets/images/strap.png"
import "../components/common/ReactIcon"
import ReactIcon from "../components/common/ReactIcon";

export default function Main(){
    return(
    <div className="main">
        <nav>
        <nav className="main-place">
        <MainButton name = "back home"/>
        <nav>
            <ReactIcon name ="<FaApple size={14}  />"/>
        
            <FaGooglePlay size={14} color="black" />
        </nav>        
        
        </nav>
        <nav className="product">
            <img src={Strap} alt="strap" />
            
            </nav>
        <span className="span">legacy black sport band for apple watch made from a custom-developed silicone and designed for whatever life throws on it</span>
        <MainButton name = "$49.99"/>
        <button className="main-button-add">add to cart <FaStepForward size={13} color="black" /></button>
        
       <nav className="lower-buttons">
        <nav>
            <button className="details-button">details<button className="more">...</button>  <FaAngleDown size={20} color="black" className="details" /></button>
            </nav>
        <button className="reviews-button">reviews</button>
        <button className="delivery-button">delivery</button>
        </nav>
         </nav>
         <nav><MainButton name = "best seller"/><img src={watch} alt="watch" width ="600" /></nav>
         
    </div>
    )
}
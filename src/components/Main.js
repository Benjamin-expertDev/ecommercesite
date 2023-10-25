import React from "react";
import "./Main.css"
import { FaApple, FaGooglePlay, FaAngleDown } from 'react-icons/fa';
import watch from "../assets/images/watch.jpg"
import MainButton from "./common/MainButton";
import Strap from "../assets/images/strap.png"
import "../components/common/ReactIcon"
import ReactIcon from "../components/common/ReactIcon";
import "../components/Price"
import Price from "../components/Price";
export default function Main(){
    return(
    <div className="main">
        <nav>
        <nav className="main-place">
        <MainButton name = "back home"/>
        <nav className="reacticon">
            <ReactIcon icon ={<FaApple size={14}  />}/>
            <ReactIcon icon ={<FaGooglePlay size={14} />} />
            
        </nav>        
        
        </nav>
        <nav className="product">
            <img src={Strap} alt="strap" />
            
            </nav>
        
        <Price />
        
        
       <nav className="lower-buttons">
        <nav>
            <button className="details-button">details<button className="more">...</button>  <FaAngleDown size={20} color="black" className="details" /></button>
            </nav>
        <button className="reviews-button">reviews</button>
        <button className="delivery-button">delivery</button>
        </nav>
         </nav>
         <nav><MainButton name = "best seller"/><img src={watch} alt="watch" width ="550" /></nav>
         
    </div>
    )
}
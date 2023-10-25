import React from "react"
import "./MainButton.css"

function MainButton({name}){
    return(
        <div>
            <button className="main-button">{name}</button>
        </div>
    )
}

export default MainButton;
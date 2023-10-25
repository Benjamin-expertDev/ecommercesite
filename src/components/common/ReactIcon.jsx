import React from "react"
import "./ReactIcon.css"

function ReactIcon({icon}){
    return(
        <div className="icon">
        
        <span className="icon-circle" >
        {icon}
        </span>
        </div>
    )
}
export default ReactIcon;
import React from "react"
import "./ReactIcon.css"

function ReactIcon({icon}){
    return(
        <div className="icon">
        <span>{icon}</span>
        <span className="icon-circle">
          
        </span>
        </div>
    )
}
export default ReactIcon;
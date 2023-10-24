import { FaAngleDown } from "react-icons/fa";
import "./DropDownInput.css";

function DropDownInput({ name, icon }) {
  return (
    <button className="nav-button">
      <nav className="accessories">
        <span>{name}</span>
        <span className="circle">
          {icon ? icon : <FaAngleDown size={20} color="black" />}
        </span>
      </nav>
    </button>
  );
}

export default DropDownInput;

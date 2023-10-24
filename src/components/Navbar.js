import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import DropDownInput from "./common/DropDownInput";

import logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div>
        <DropDownInput name="straps" />
        <DropDownInput name="accessories" />
      </div>

      <img src={logo} alt="Logo" width="100" />

      <div>
        <DropDownInput
          name="search..."
          icon={<FaSearch size={20} color="black" />}
        />
        <DropDownInput name="cart" icon="0" />
        <span className="menu">Menu</span>
        <FaBars className="menu-icon" size={15} color="black" />
      </div>
    </div>
  );
}

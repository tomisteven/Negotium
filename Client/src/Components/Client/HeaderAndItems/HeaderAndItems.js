import React from "react";
import "./HeaderAndItems.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import logo from "../../../assets/Negotium Assets/logoN.png";


export function HeaderAndItems() {
  return (
    <div className="header-nav">
      <div className="header-ul">
        <div className="header-img">
          <img className="logo" src={logo} alt="" />
        </div>
        <ul className="header-ul-items">
          <Link to="/">
            <h4 className="header-item-name">Home</h4>
          </Link>
          <Link to="/funciones">
            <h4 className="header-item-name">Funciones</h4>
          </Link>
          <Link to="/objetivos">
            <h4 className="header-item-name">Planes</h4>
          </Link>
          <Link to="/contacto">
            <h4 className="header-item-name">Contacto</h4>
          </Link>


          <Link to="/admin/dashboard">
            <Button>Empezar</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

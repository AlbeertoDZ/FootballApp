import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return <>
  <nav className="nav-bar">
    <ul>
      <li>
        <Link to="/">Partidos</Link>
      </li>
      <li>
        <Link to="/new">Crear Partido</Link>
      </li>
      <li>
        <Link to="/standings">Clasificación</Link>
      </li>
      <li>
        <Link to="/favoritematches">Partidos Favoritos</Link>
      </li>
      <li>
        <Link to="/createfavoritematches">Crear Partido Favorito</Link>
      </li>
    </ul>
  </nav>
  </>;
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return <>
  <nav>
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
    </ul>
  </nav>
  </>;
};

export default Nav;

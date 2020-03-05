import React from "react";
import { Link } from "react-router-dom";

export default ({ user }) => {
  return (
    <div className="btn-group dropleft">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {user.userName}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Mi Carrito
        </a>
        <a className="dropdown-item" href="#">
          Mi Perfil
        </a>
        <a className="dropdown-item" href="#">
          Mis Compras
        </a>
        <a className="dropdown-item" href="#">
          Log Out
        </a>
      </div>
    </div>
  );
};

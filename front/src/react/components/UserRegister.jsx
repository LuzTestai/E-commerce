import React, { useState } from "react";
import { Link } from "react-router-dom";

export default ({ handlerInputForm, onSubmitForm }) => {
  return (
    <div className="">
      <div className="btn-group dropleft" >
        <button
          type="button"
          className="btn btn-success dropdown-toggle btn-block"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{backgroundColor:"#1c4c50" ,borderColor:"#1c4c50"}}
        >
          Sign In
        </button>
        <div className="dropdown-menu">
          <Link
            to="/carrito"
            className="btn btn-info dropdown-item text-center"
          >
            <div>Carrito</div>
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="/login" className="btn btn-info dropdown-item text-center">
            <div>Login</div>
          </Link>
          <div className="dropdown-divider"></div>
          <Link
            to="/register"
            className="btn btn-info dropdown-item text-center"
          >
            <div>Register</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

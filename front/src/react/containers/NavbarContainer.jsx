import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router";
import { fetchProductsByName } from "../../redux/action-creators/productos";
import { loginUser } from "../../redux/action-creators/login";
import { connect } from "react-redux";
import { userLogout } from "../../redux/action-creators/login";

const NavbarContainer = ({
  fetchProductsByName,
  history,
  user,
  loginUser,
  userLogout
}) => {
  const [inputSearch, setInputSearch] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handlerInput = e => {
    setInputSearch(e.target.value);
  };

  const handlerInputForm = e => {
    const input = e.target.name;
    switch (input) {
      case "inputEmail":
        setInputEmail(e.target.value);
        break;
      case "inputPassword":
        setInputPassword(e.target.value);
        break;
    }
  };

  const onSubmitSearch = e => {
    e.preventDefault();
    if (inputSearch.length >= 1) {
      console.log("ENTRA AL ONSUBMIT");

      fetchProductsByName(inputSearch).then(() => {
        history.push(`/products/product/${inputSearch}`);
      });
    } else {
      alert("Tienes que escribir mas de una letra");
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    loginUser(inputEmail, inputPassword).then(() => {
      history.push("/home");
    });
  };
  const onSubmitLogout = e => {
    e.preventDefault();
    userLogout().then(() => history.push("/home"));
  };

  return (
    <div>
      <Navbar
        onSubmitLogout={onSubmitLogout}
        onSubmitForm={onSubmitForm}
        handlerInputForm={handlerInputForm}
        onSubmitSearch={onSubmitSearch}
        inputSearch={inputSearch}
        handlerInput={handlerInput}
        user={user}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductsByName: name => dispatch(fetchProductsByName(name)),
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    userLogout: () => dispatch(userLogout())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(NavbarContainer));

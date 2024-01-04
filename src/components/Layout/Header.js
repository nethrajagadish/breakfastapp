import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Header = (props) => {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">BreakfastSpace</Link>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
      {cartShown && <Cart onClose={hideCartHandler} />}
    </Fragment>
  );
};

export default Header;

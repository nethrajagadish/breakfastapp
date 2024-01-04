import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import orderimage from "../../assets/orderimage.png";

const isEmpty = (enteredValue) => enteredValue.trim() === "";

const isSixChars = (enteredValue) => enteredValue.trim().length === 6;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
    state: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameEntered = nameInputRef.current.value;
    const streetEntered = streetInputRef.current.value;
    const postalCodeEntered = postalCodeInputRef.current.value;
    const cityEntered = cityInputRef.current.value;
    const stateEntered = stateInputRef.current.value;

    const nameEnteredValid = !isEmpty(nameEntered);
    const streetEnteredValid = !isEmpty(streetEntered);
    const postalCodeEnteredValid = isSixChars(postalCodeEntered);
    const cityEnteredValid = !isEmpty(cityEntered);
    const stateEnteredValid = !isEmpty(stateEntered);

    setFormValidity({
      name: nameEnteredValid,
      street: streetEnteredValid,
      postalCode: postalCodeEnteredValid,
      city: cityEnteredValid,
      state: stateEnteredValid,
    });
    const isFormValid =
      nameEnteredValid &&
      streetEnteredValid &&
      postalCodeEnteredValid &&
      cityEnteredValid &&
      stateEnteredValid;

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name: nameEntered,
      street: streetEntered,
      city: cityEntered,
      postalCode: postalCodeEntered,
      state: stateEntered,
    });
  };
  const nameControlClasses = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formValidity.street ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formValidity.postalCode ? "" : classes.invalid
  }`;
  const stateControlClasses = `${classes.control} ${
    formValidity.state ? "" : classes.invalid
  }`;
  return (
    <div className={classes.block}>
      <h1 className={classes.headline}>Delivery Address</h1>
      <div className={classes.formsection}>
        <form className={classes.form} onSubmit={confirmHandler}>
          <div className={nameControlClasses}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formValidity.name && <p>Please enter a name</p>}
          </div>
          <div className={streetControlClasses}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInputRef} />
            {!formValidity.street && <p>Please enter a street</p>}
          </div>
          <div className={stateControlClasses}>
            <label htmlFor="state">State</label>
            <input type="text" id="state" ref={stateInputRef} />
            {!formValidity.street && <p>Please enter your state</p>}
          </div>
          <div className={postalCodeControlClasses}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalCodeInputRef} />
            {!formValidity.postalCode && (
              <p>Please enter a postal code(6 characters)</p>
            )}
          </div>
          <div className={cityControlClasses}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInputRef} />
            {!formValidity.city && <p>Please enter a city</p>}
          </div>
          <div className={classes.actions}>
            <button className={classes.submit}>Confirm</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
        <div className={classes.orderimg}>
          <img src={orderimage} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import orderimage from "../../assets/orderimage.png";

const isEmpty = (enteredValue) => enteredValue.trim() === "";

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    mobile: true,
    table: true,
  });
  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const tableInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameEntered = nameInputRef.current.value;
    const mobileEntered = mobileInputRef.current.value;
    const tableEntered = tableInputRef.current.value;

    const nameEnteredValid = !isEmpty(nameEntered);
    const mobileEnteredValid = !isEmpty(mobileEntered);
    const tableEnteredValid = !isEmpty(tableEntered);

    setFormValidity({
      name: nameEnteredValid,
      mobile: mobileEnteredValid,
      table: tableEnteredValid,
    });
    const isFormValid =
      nameEnteredValid && mobileEnteredValid && tableEnteredValid;

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name: nameEntered,
      mobile: mobileEntered,
      table: tableEntered,
    });
  };
  const nameControlClasses = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const mobileControlClasses = `${classes.control} ${
    formValidity.mobile ? "" : classes.invalid
  }`;
  const tableControlClasses = `${classes.control} ${
    formValidity.table ? "" : classes.invalid
  }`;
  return (
    <div className={classes.block}>
      <div className={classes.formsection}>
        <form className={classes.form} onSubmit={confirmHandler}>
          <div className={nameControlClasses}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formValidity.name && <p>Please enter a name</p>}
          </div>
          <div className={mobileControlClasses}>
            <label htmlFor="mobile">Mobile No</label>
            <input
              type="text"
              id="mobile"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={mobileInputRef}
            />
            {!formValidity.mobile && <p>Please enter your mobile number</p>}
          </div>
          <div className={tableControlClasses}>
            <label htmlFor="table">Table No</label>
            <input type="text" id="table" ref={tableInputRef} />
            {!formValidity.table && <p>Please enter the table number</p>}
          </div>
          <div className={classes.actions}>
            <button className={classes.submit}>Confirm</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
        <div className={classes.orderimg}>
          <img src={orderimage} alt="person ordering" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Qty"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
        className={classes.qtyFormInput}
      />
      <div className={classes.orderbtn}>
        <button>+ Add</button>
      </div>
      {!amountValid && <p>Please enter valid amount</p>}
    </form>
  );
};
export default FoodItemForm;

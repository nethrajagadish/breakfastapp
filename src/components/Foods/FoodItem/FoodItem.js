import classes from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const FoodItem = (props) => {
  const price = `${props.price}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.food}>
      <img src={props.image} alt={props.name} height="320" width="320" />
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>&#x20B9;&nbsp;{price}</div>
      </div>
      <div className={classes.qtyForm}>
        <FoodItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default FoodItem;

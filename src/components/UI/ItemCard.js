import classes from "./itemCard.module.css";

const ItemCard = (props) => {
  return <div className={classes.itemCard}>{props.children}</div>;
};
export default ItemCard;

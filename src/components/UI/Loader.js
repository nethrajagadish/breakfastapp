import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes["loading-container"]}>
      <div class={classes["loading-circle"]}></div>
      <div class={classes["loading-circle"]}></div>
      <div class={classes["loading-circle"]}></div>
    </div>
  );
};
export default Loader;

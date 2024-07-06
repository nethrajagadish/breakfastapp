import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes["loading-container"]}>
      <div className={classes["loading-circle"]}></div>
      <div className={classes["loading-circle"]}></div>
      <div className={classes["loading-circle"]}></div>
    </div>
  );
};
export default Loader;

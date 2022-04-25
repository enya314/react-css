import classes from "./CSSModules.module.scss";
export const CSSModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};

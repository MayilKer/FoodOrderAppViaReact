import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButtons";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food." />
      </div>
    </Fragment>
  );
};

export default Header;

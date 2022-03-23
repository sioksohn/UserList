import { ButtonProps } from "../../Interfaces";
import classes from "./Button.module.css";

const Button = (props: ButtonProps) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

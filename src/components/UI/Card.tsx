import { WrapProps } from "../../Interfaces";
import classes from "./Card.module.css";

const Card = (props: Pick<WrapProps, "children" | "className">) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

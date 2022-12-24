import btnstyle from "./Button.module.css";
import propTypes from "prop-types";

const Button = ({ text }) => {
  return <button className={btnstyle.btn}>{text}</button>;
};

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;

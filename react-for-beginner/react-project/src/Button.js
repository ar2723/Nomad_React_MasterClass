import Proptypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text }) => {
    return <button className={styles.btn}>{text}</button>
}
Button.propTypes = {
    text: Proptypes.string.isRequired,
}
export default Button;
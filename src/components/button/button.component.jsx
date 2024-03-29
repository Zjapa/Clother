import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonType, disabled, ...otherProps }) {
  return (
    <button
      type="button"
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} `}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;

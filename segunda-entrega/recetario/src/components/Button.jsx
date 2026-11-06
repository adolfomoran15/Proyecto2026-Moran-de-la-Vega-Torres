import "@styles/Button.scss";

const Button = ({
  children,
  onClick,
  type = "button",
  className,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;

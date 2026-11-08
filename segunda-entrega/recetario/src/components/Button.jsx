import "@styles/Button.scss";

const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;

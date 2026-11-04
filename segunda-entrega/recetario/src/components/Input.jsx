import '@styles/Input.scss';
 
const Input = ({ id, label, type = 'text', value, onChange, error, placeholder, maxLength }) => {
    const errorId = `${id}-error`;
 
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? errorId : undefined}
            />
            {error && (
                <p id={errorId} className="mensaje-error" role="alert">
                    {error}
                </p>
            )}
        </>
    );
};
 
export default Input;
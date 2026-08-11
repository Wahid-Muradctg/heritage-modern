import React from 'react';

const Button = ({
    onClick,
    text,   
    rIcon: RightIcon,
    type = "button",
    className = "",
    disabled = false,
}) => {
    return (
        <button
            className={`${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
           
            {text}
            {RightIcon && <RightIcon />}
        </button>
    );
};

export default Button;
import React from 'react'
import '../styles/button.css'

const Button = ({
    title = 'default title',
    onClick = () => null,
    className = '',
    type = 'button',
}) => {
    return (
        <button type={type} onClick={onClick} className={`btn ${className}`}>
            {title}
        </button>
    )
}

export default Button

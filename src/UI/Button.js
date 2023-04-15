import React from 'react'

function Button({ type, className, children, ariaLabel }) {
    return (
        <button type={type} className={className} aria-label={ariaLabel}>{children}</button>
    )
}

export default Button
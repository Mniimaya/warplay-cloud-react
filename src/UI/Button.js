import React from 'react'

function Button({ type, className, children, ariaLabel }) {
    return (
        <button type={type} className={className} ariaLabel={ariaLabel}>{children}</button>
    )
}

export default Button
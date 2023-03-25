import React from 'react';

export const WrapperError = ({ error, children, message }) => {

    if (!error) return children;

    return (
        <div className='error-wrap'>
            {message}
        </div>
    )
}

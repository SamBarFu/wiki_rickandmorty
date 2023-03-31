import React from 'react'

export default Image = ({ src }) => {

    return (
        <>
            <img
                className='character-img'
                src={src}
                loading="lazy"
            />
        </>
    )
}

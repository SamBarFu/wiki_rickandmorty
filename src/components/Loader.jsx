import React from 'react'

export const Loader = ({ loading, children }) => {

    if (!loading) return children;

    return (
        <div className='loader-wrap'>
            <img src='https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif' />
        </div>
    )
}

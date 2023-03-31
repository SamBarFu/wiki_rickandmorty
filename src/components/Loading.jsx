import React from 'react';
import Spin from '@img/loading.webp';

export const Loading = () => {
    return (
        <div>
            <img src={Spin} style={{
                width: '100%'
            }} />
        </div>
    )
}

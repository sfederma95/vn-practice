import React from 'react';

function Portrait ({name,src}) {
    return (
        <img className='character' alt={name} src={src}/>
    )
}

export default Portrait;
import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc grow ma2 pa2 br2 bw3 dib bg-light-green shadow-6'>
            <img alt ='robots' src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
export default Card
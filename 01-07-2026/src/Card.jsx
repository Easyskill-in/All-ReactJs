import React from 'react'

const Card = ({ name, id, age }) => {
    return (
        <div>
            <hr />
            <span>{id}</span>
            <h1>Name : {name}</h1>
            <span>{age}</span>
            <hr />

        </div>
    )
}

export default Card

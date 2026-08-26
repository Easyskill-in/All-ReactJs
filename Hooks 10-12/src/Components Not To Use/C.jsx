import React from 'react'

const C = ({ Data }) => {
    return (
        <div>
            <h1>C Component</h1>
            <h1>USERNAME : {Data.username}</h1>
            <h1>Email : {Data.email}</h1>

        </div>
    )
}

export default C

import React from 'react'
import B from './B'

const A = ({ Data }) => {
    return (
        <div>
            <h1>A Component {Data.username}</h1>
            <hr />
            <B  Data={Data}/>
        </div>
    )
}

export default A

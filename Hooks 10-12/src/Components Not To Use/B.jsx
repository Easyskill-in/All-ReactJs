import React from 'react'
import C from './C'

const B = ({ Data }) => {
    return (
        <div>
            <h1>B Component {Data.email}</h1>
            <hr />
            <C Data={Data} />
        </div>
    )
}

export default B

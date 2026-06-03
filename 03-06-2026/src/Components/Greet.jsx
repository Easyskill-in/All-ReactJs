import React from 'react'
import { useParams } from 'react-router-dom'

const Greet = () => {
    const DATA = useParams()
    console.log(DATA.name)
    return (
        <div>
            <h1>Hello {DATA.name}</h1>
        </div>
    )
}

export default Greet

import React from 'react'
import { useParams } from 'react-router-dom'

const Greet = () => {
    const Data = useParams()
    console.log(Data);

    return (
        <div>
            <h1>Hello {Data.myname || Data.name || "USER"}</h1>
        </div>
    )
}

export default Greet

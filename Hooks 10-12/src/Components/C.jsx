import React, { useContext } from 'react'
import { DataContext } from '../App'

const C = () => {
    const MyData = useContext(DataContext)
    console.log(MyData);

    return (
        <div>
            <h1>C Component</h1>
            <h1>USERNAME : {MyData.username}</h1>
            <h1>EMAIL : {MyData.email}</h1>
        </div>
    )
}

export default C

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav = useNavigate()

    useEffect(() => {

        nav("/product")

    }, [])
    return (
        <div>
            <h1>Hello From Home Page</h1>
        </div>
    )
}

export default Home


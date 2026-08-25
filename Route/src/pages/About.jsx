import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const nav = useNavigate()

    useEffect(() => {

        nav("/")

    }, [])
    return (
        <div>
            <h1>Hello From About Page</h1>
        </div>
    )
}

export default About

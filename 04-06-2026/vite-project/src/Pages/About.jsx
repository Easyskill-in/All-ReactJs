import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, [])
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export default About

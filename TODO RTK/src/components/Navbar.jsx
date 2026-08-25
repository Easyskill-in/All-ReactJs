import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Add</Link>
                </li>
                <li>
                    <Link to="/update">Update</Link>
                </li>
                <li>
                    <Link to="/task">All Task</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

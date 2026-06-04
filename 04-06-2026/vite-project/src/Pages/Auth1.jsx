import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Auth = () => {
    let isLogin = false;
    const nav = useNavigate();
    useEffect(() => {
        if (!isLogin) {
            nav("/")
        }
    }, [isLogin])
    return (
        <div>

            <Outlet />
        </div>
    )
}

export default Auth

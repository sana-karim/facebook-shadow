import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const ProtectedRoutes = ({ Component, route = "", handleNavigations }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem("loggedInUser");
        if (!isUserLoggedIn) {
            handleNavigations(false)
            navigate("/login")
        } else {
            navigate("/" + route)
            handleNavigations(true);
        }
    }, []);

    return (
        Component
    )
}
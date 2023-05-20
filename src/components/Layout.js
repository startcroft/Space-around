import React from "react"
import { NavLink, Outlet } from "react-router-dom"


 const Layout = () => {

    return (

    <>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Destination">Destination</NavLink></li>
                <li><NavLink to="/Crew">Crew</NavLink></li>
                <li><NavLink to="/Tenologies">Tecnologies</NavLink></li>
            </ul>
        </nav>

        <Outlet />
    </>
    )

}

export default Layout;
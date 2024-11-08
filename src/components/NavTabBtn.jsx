import { Link } from "react-router-dom";
import "./NavTabBtn.css";

import React from 'react'

export const NavTabBtn = ({ linkPath, isHoverActive, linkIcn }) => {
    return (
        <Link to={`/${linkPath}`} className={`nav-link ${isHoverActive ? "nav-link-hover" : ""}`}>
            <img className='nav-img' src={linkIcn} alt="home icn" />
        </Link>
    )
}

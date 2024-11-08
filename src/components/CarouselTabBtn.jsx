import "./CarouselTabBtn.css";

import React from 'react'

export const CarouselTabBtn = ({ btnIcn, isHoverActive, btnName }) => {
    return (
        <div className={`btn-icn-name-container ${isHoverActive ? "btn-hover" : ""}`}>
            <div className="btn-icn-container">
                <img className="carousel-btn-icn" src={btnIcn} alt="" />
            </div>
            <span>{btnName}</span>
        </div>
    )
}

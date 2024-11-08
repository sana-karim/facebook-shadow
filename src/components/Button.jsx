import "./Button.css";

import React from 'react'

export const Button = ({ btnIcn, btnName }) => {
    return (
        <div className="button-container">
            <div className="botton-icn-container">
                <img className="btn-icn" src={btnIcn} alt="" />
            </div>
            <span >{btnName}</span>
        </div>
    )
}

import React from 'react';
import "./HamburgerList.css";


export const HamburgerList = ({ icnSrc, listName, icnWidth, handleOnClick }) => {
    return (
        <div className='hamburger-list-container' onClick={handleOnClick} >
            <div className="hamburger-list-icn-container">
                <img src={icnSrc} style={{ width: icnWidth }} className='hamburger-list-icn' alt='' />
            </div>
            <div className="hamburger-list-name">{listName}</div>
        </div>
    )
}

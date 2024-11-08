import React from 'react';
import "./MenuList.css"

export const MenuList = ({ imgSrc, header, subHeader }) => {
    return (
        <div className="list-container">
            <div className="list-icon-container">
                <img className='menu-left-icn' src={imgSrc} alt="" />
            </div>
            <div className="list-info">
                <div className="list-header">{header}</div>
                <div className="list-sub-header">{subHeader}</div>
            </div>
        </div>
    )
}

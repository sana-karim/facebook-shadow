import React from 'react';
import "./MenuCreateList.css";

export const MenuCreateList = ({ imgPath, listName }) => {
    return (
        <div className='menu-right-create-list-container'>
            <div className="create-list-icn-container">
                <img className='create-list-icn' src={imgPath} alt={`${listName} icon`} />
            </div>
            <div className="create-page-name">{listName}</div>
        </div>
    )
}

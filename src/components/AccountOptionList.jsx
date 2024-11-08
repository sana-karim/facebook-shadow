import React from 'react'
import "./AccountOptionList.css";

export const AccountOptionList = ({ icnSrc, optionName, moreIcnSrc, handleOnClick }) => {

    const renderMoreIcn = () => {
        return (
            moreIcnSrc && <img src={moreIcnSrc} className='option-list-more-icn' alt='more icn' />
        )
    }

    return (
        <div className='account-option-list-container' onClick={handleOnClick}>
            <div className="option-list-icn-container">
                <img src={icnSrc} className='option-list-icn' />
            </div>
            <div className="option-name">{optionName}</div>
            <div className="option-list-more-icn-container">
                {renderMoreIcn()}
            </div>
        </div>
    )
}

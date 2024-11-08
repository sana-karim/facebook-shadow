// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import "./LeftHamburger.css";
import { assets } from '../utils/imports';
import { HamburgerList } from './HamburgerList';
import { leftHamburgerData } from '../utils/leftHamburgerData';


export const LeftHamburger = () => {

    const [isFullListVisible, setIsFullListVisible] = useState(false);


    const renderList = () => {
        let listArr = [];
        for (let i = 0; i < leftHamburgerData.length; i++) {
            if (!isFullListVisible && i === 5) {
                break;
            }
            listArr.push(
                <HamburgerList
                    key={i}
                    icnSrc={leftHamburgerData[i].icnSrc}
                    listName={leftHamburgerData[i].listName} />
            )
        }
        return listArr;
    }

    const onMoreListVisibility = () => {
        setIsFullListVisible(!isFullListVisible);
    }


    return (
        <div className={isFullListVisible
            ?
            "left-hamburger-container show-full-list"
            :
            "left-hamburger-container"}>
            <HamburgerList
                icnSrc={assets.profileImg}
                listName={"Aamir Karim"}
                icnWidth="100%" />
            {renderList()}
            <HamburgerList
                icnSrc={isFullListVisible ? assets.up_arrow_icn : assets.down_arrow_icn}
                listName={isFullListVisible ? "See less" : "See more"} handleOnClick={onMoreListVisibility} />
        </div>
    )
}

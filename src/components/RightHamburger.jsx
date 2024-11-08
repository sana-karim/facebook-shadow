import { getValue } from "firebase/remote-config";
import { assets } from "../utils/imports";
import { AccountOptionList } from "./AccountOptionList";
import { HamburgerList } from "./HamburgerList";
import "./RightHamburger.css";

import React, { useEffect, useState } from 'react'
import { remoteConfig } from "../utils/firebase";

export const RightHamburger = () => {

    const [contactsRemoteData, setContactsRemoteData] = useState(null);

    useEffect(() => {
        const fetchedData = getValue(remoteConfig, "contacts");
        const contactsData = JSON.parse(fetchedData._value);
        setContactsRemoteData(contactsData);
    }, []);

    const renderHamburgerList = () => {
        const listArray = [];
        for (let i = 0; i < contactsRemoteData?.length; i++) {
            listArray.push(
                <HamburgerList
                    key={i}
                    icnSrc={contactsRemoteData[i]?.profileImg}
                    listName={contactsRemoteData[i]?.name}
                    icnWidth={"100%"} />
            )
        }
        return listArray;
    }


    return (
        <div className="right-hamburger-container">
            <div className="right-hamburger-header-call-search-option-btn" >
                <div className="right-hamburger-header">
                    Contacts
                </div>
                <span className="right-hamburger-new-call-btn">
                    <img src={assets.new_call_icn} className="right-hamburger-header-btn-icn" alt="new call icn" />
                </span>
                <span className="right-hamburger-search-btn">
                    <img src={assets.search_icn} alt="search icn" className="right-hamburger-header-btn-icn" />
                </span>
                <span className="right-hamburger-nore-btn">
                    <img src={assets.more_btn_icn} alt="more icn" className="right-hamburger-header-btn-icn" />
                </span>
            </div>
            {renderHamburgerList()}
            {renderHamburgerList()}
            {renderHamburgerList()}
        </div>
    )
}

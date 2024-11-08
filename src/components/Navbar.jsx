import React from 'react';
import "./Navbar.css";
import { assets } from '../utils/imports';
import { useState, useEffect, useRef } from 'react';
import { Menu } from './Menu';
import { AccountPopup } from './AccountPopup';
import { NavTabBtn } from './NavTabBtn';

export const Navbar = ({ handleNavigations }) => {

    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isAccountPopupVisible, setIsAccountPopupVisible] = useState(false);
    const [selectedNavTab, setSelectedNavTab] = useState("")
    const inputRef = useRef(null);

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setIsSearchActive(false);
            // console.log(event)
        } else if (event.keyCode === 27) {
            setIsSearchActive(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
            document.removeEventListener("keydown", handleClickOutside)
        }
    }, []);

    const handleNavTabClick = (selectedNav) => {
        setSelectedNavTab(selectedNav);
    }

    return (
        <nav className='nav-container'>
            <div className="nav-container-left">
                <img src={assets.facebook_circle_icn} className='circle-logo' alt="fb circle logo" />
                <div className='nav-search-facebook-input-container'>
                    <img src={assets.search_icn} className='nav-search-icn' alt="search icn" />
                    <input
                        type="text"
                        ref={inputRef}
                        onFocus={() => setIsSearchActive(true)}
                        className='nav-search-facebook-input'
                        placeholder='Search Facebook'
                    />
                </div>
                {
                    isSearchActive
                    &&
                    <div className="populate-list">
                        <div className='navbar-whitespace'></div>
                        <div className='list'>
                            <div>1</div>
                            <div>3</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                        </div>
                    </div>
                }

            </div>
            <ul className="nav-container-middle">
                <li
                    onClick={() => { handleNavTabClick("") }}
                    className={`nav-li ${selectedNavTab === "" ? "selected-li" : ""}`}>
                    <NavTabBtn
                        linkPath={""}
                        isHoverActive={selectedNavTab === "" ? false : true}
                        linkIcn={selectedNavTab === "" ? assets.home_icn_blue : assets.home_icn_gray} />
                </li>
                <li
                    onClick={() => { handleNavTabClick("friends") }}
                    className={`nav-li ${selectedNavTab === "friends" ? "selected-li" : ""}`}>
                    <NavTabBtn
                        linkPath={"friends"}
                        isHoverActive={selectedNavTab === "friends" ? false : true}
                        linkIcn={selectedNavTab === "friends" ? assets.friends_icn_blue : assets.friends_icn_gray} />
                </li>
                <li
                    onClick={() => { handleNavTabClick("watch") }}
                    className={`nav-li ${selectedNavTab === "watch" ? "selected-li" : ""}`}>
                    <NavTabBtn
                        linkPath={"watch"}
                        isHoverActive={selectedNavTab === "watch" ? false : true}
                        linkIcn={selectedNavTab === "watch" ? assets.watch_icn_blue : assets.watch_icn_gray} />
                </li>
                <li onClick={() => { handleNavTabClick("marketplace") }}
                    className={`nav-li ${selectedNavTab === "marketplace" ? "selected-li" : ""}`}>
                    <NavTabBtn
                        linkPath={"marketplace"}
                        isHoverActive={selectedNavTab === "marketplace" ? false : true}
                        linkIcn={selectedNavTab === "marketplace" ? assets.marketplace_icn_blue : assets.marketplace_icn_gray} />
                </li>
                <li
                    onClick={() => { handleNavTabClick("gaming") }}
                    className={`nav-li ${selectedNavTab === "gaming" ? "selected-li" : ""}`}>
                    <NavTabBtn
                        linkPath={"gaming"}
                        isHoverActive={selectedNavTab === "gaming" ? false : true}
                        linkIcn={selectedNavTab === "gaming" ? assets.gaming_icn_blue : assets.gaming_icn_gray} />
                </li>
            </ul>
            <div className="nav-container-right">
                <div className={`nav-container-right-menu ${isMenuVisible ? "menu-btn-active-bg-clr" : "menu-btn-active-hover-clr"}`} >
                    <img className='nav-menu-btn-icn' onClick={() => setIsMenuVisible(!isMenuVisible)} src={isMenuVisible ? assets.menu_icn_blue : assets.menu_icn_black} alt="" />
                    {
                        isMenuVisible
                        &&
                        <Menu />
                    }
                </div>
                <div className="nav-container-right-messenger">
                    <img className='nav-action-btn' src={assets.messenger_icn_black} alt="" />
                </div>
                <div className="nav-container-right-notification">
                    <img className='nav-action-btn' src={assets.notification_icn_black} alt="" />
                </div>
                <div className="nav-container-right-account">
                    <img src={assets.profileImg} onClick={() => setIsAccountPopupVisible(!isAccountPopupVisible)} className='nav-container-right-account-img' alt="profile img" />
                    {
                        isAccountPopupVisible
                        &&
                        <AccountPopup handleNavigations={handleNavigations} />
                    }
                </div>
            </div>
        </nav>
    )
}
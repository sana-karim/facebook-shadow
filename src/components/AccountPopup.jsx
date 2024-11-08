import React from 'react'
import "./AccountPopup.css";
import { assets } from '../utils/imports';
import { AccountOptionList } from './AccountOptionList';
import { AccountPopupFooter } from './AccountPopupFooter';
import { getAuth, signOut } from "firebase/auth"
import { app } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';


export const AccountPopup = ({ handleNavigations }) => {

    const navigate = useNavigate();


    const auth = getAuth(app)

    const handleLogout = () => {
        signOut(auth).then((data) => {
            alert("signout successful");
            navigate("/login");
            handleNavigations(false);
            localStorage.removeItem("loggedInUser");
        })
    }

    return (
        <div className='account-popup-container'>
            <div className='account-popup-container-top'>
                <div className="account-popup-profile-container">
                    <div className="profile-list-container">
                        <div className="profile-img-container">
                            <img src={assets.profileImg} className='account-profile-img' alt="profile img" />
                        </div>
                        <div className='account-profile-name'>Aamir Karim</div>
                    </div>
                    <hr className='horizontal-line' />
                    <div className="see-all-profile">
                        <span>See all profiles</span>
                    </div>
                </div>
            </div>
            <div className='account-popup-container-middle'>
                <AccountOptionList icnSrc={assets.setting_icn} optionName={"Settings & privacy"} moreIcnSrc={assets.more_icn} />
                <AccountOptionList icnSrc={assets.help_and_support_icn} optionName={"Help & support"} moreIcnSrc={assets.more_icn} />
                <AccountOptionList icnSrc={assets.display_and_accessibility_icn} optionName={"Display & accessibility"} moreIcnSrc={assets.more_icn} />
                <AccountOptionList icnSrc={assets.give_feedback_icn} optionName={"Give feedback"} moreIcnSrc={null} />
                <AccountOptionList icnSrc={assets.logout_icn} optionName={"Log out"} moreIcnSrc={null} handleOnClick={handleLogout} />
            </div>
            <div className='account-popup-container-bottom'>
                <AccountPopupFooter />
            </div>
        </div>
    )
}

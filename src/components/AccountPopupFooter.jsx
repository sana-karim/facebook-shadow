import React from 'react'
import "./AccountPopupFooter.css"

export const AccountPopupFooter = () => {
    return (
        <div className='account-popup-footer-container'>
            <div className='footer-top'>
                <span className="footer-top-span">Privacy</span>
                <span className="footer-top-span">Terms</span>
                <span className="footer-top-span">Advertising</span>
                <span className="footer-top-span">Ad choices</span>
                <span className="footer-top-span">Coolies</span>
                <span className="footer-top-span">More</span>
            </div>
            <div className='footer-bottom'>Meta © 2023</div>
        </div>
    )
}

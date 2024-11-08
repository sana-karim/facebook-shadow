import { assets } from "../utils/imports";
import { Button } from "./Button";
import "./CreatePostOrGoLive.css";

import React from 'react'

export const CreatePostOrGoLive = ({ userName, userImg }) => {
    console.log(userName, "userName")
    return (
        <div className="create-post-or-go-live-container">
            <div className="create-post-or-go-live-top">
                <div className="create-post-profile-img-container">
                    <img src={userImg || assets.profileImg} className="account-img" alt="profile img" />
                </div>
                <div className="create-post">
                    <span> What's on your mind, {userName}{userName && "?"}</span>
                </div>
            </div>
            <div className="create-post-or-go-live-bottom">
                <Button btnIcn={assets.video_camera_icn} btnName="Live video" />
                <Button btnIcn={assets.photo_icn} btnName="Photo/video" />
                <Button btnIcn={assets.smiley_icn} btnName="Feeling/activity" />
            </div>
        </div>
    )
}

import { assets } from "../utils/imports";
import "./CreateStoryCard.css";

import React from 'react'

export const CreateStoryCard = ({ profileImg }) => {
    return (
        <div className="create-stroy-card-container">
            <div className="user-profile-img-container">
                <img src={profileImg || assets.profileImg} className="user-profile-img" alt="user prof img" />
            </div>
            <div className="create-story-icn-container">
                <img src={assets.add_icn} className="create-story-icn" alt="plus icn" />
            </div>
            <div className="create-story-header">Create Story</div>
        </div>
    )
}

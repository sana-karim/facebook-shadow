import React, { useEffect, useState } from 'react'
import "./Post.css";
import { assets } from "../utils/imports";
import { Button } from './Button';

export const Post = (props) => {

    const [fontSize, setFontSize] = useState(16);
    useEffect(() => {
        const containerWidth = document.querySelector(".post-subject").offsetWidth;
        // console.log("postText ----------", props.postText);
        const textLength = props.postText.length;
        setFontSize(Math.max(16, Math.min(24, (containerWidth / textLength) * 2)));
        // console.log("cntWdth------", containerWidth, "txtLength------", textLength,)
    }, []);


    return (
        <div className='post-container'>
            <div className='post-container-top'>
                <div className="post-user-info">
                    <div className="post-user-info-left">
                        <div className="post-user-image-container">
                            <img src={props.authorProfileImg} className='post-user-image' alt="post user img" />
                        </div>
                    </div>
                    <div className="post-user-info-middle">
                        <div className="post-user-name">{props.authorName}</div>
                        <div className="post-user-time-post-user-relation-container">
                            <div className="post-user-time">{props.postTimestamp}</div>
                            <span> ● </span>
                            <div className="post-user-relation">
                                <img src={assets.group_icn} className='post-user-relation-icn' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="post-info-right">
                        <div className="more-btn-contianer">
                            <img src={assets.more_btn_icn} className='more-btn-icn' alt="more btn" />
                        </div>
                        <div className="post-hide-btn-container">
                            <img src={assets.close_icn} className='post-hide-btn-icn' alt="close btn" />
                        </div>
                    </div>
                </div>
                <div className='post-subject' style={props.postMedia ? { fontSize: "1rem" } : { fontSize: `${fontSize}px` }}>
                    {props.postText}
                </div>
            </div>
            {
                props.postMedia
                &&
                <div className='post-img-container-middle'>
                    <img src={props.postMedia} className='post-img' alt="Post Image" />  {/* changeIage */}
                </div>
            }
            <div className='post-container-bottom'>
                {
                    false
                    &&
                    <div className="like-count-container">
                        <img src="" alt="" />
                        <span className="like-count"></span>
                    </div>
                }
                <div className="like-comment-btn-container">
                    <div className="like-btn-container">
                        <Button btnIcn={assets.like_btn_icn} btnName="Like" />
                    </div>
                    <div className="comment-btn-container">
                        <Button btnIcn={assets.comment_btn_icn} btnName="Comment" />
                    </div>
                </div>
                <div className="user-image-comment-container">
                    <div className="user-img-container">
                        <img className='user-profile-image' src={props.authorProfileImg} alt="" />
                    </div>
                    <div className="comment-input-container">
                        <input type="text" className='comment-input-field' placeholder='Write a comment...' />
                        <span className='comment-input-field-span'><img className='comment-input-icn' src={assets.avatar_sticker_icn} alt="avatar sticker icn" /></span>
                        <span className='comment-input-field-span'><img className='comment-input-icn' src={assets.emoji_icn} alt="emoji icn" /></span>
                        <span className='comment-input-field-span'><img className='comment-input-icn' src={assets.camera_icn} alt="camera icn" /></span>
                        <span className='comment-input-field-span'><img className='comment-input-icn' src={assets.gif_icn} alt="gif icn" /></span>
                        <span className='comment-input-field-span'><img className='comment-input-icn' src={assets.sticker_icn} alt="sticker icn" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar
                    src={profilePic}
                    className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>
                        {/* new Date(timestamp).toUTCString() */}
                        { /*new Date(timestamp).toUTCString() */}
                        { /*new Date(timestamp).toLocaleDateString()*/ }
                        { new Date(timestamp).toLocaleString() }
                        { /*new Date(timestamp).toDateString()*/ }
                    </p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpAltOutlinedIcon />
                    <p>Live</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <NearMeOutlinedIcon />
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircleOutlinedIcon />
                    <ExpandMoreOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post

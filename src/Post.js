import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import LoopIcon from '@material-ui/icons/Loop';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ClearIcon from '@material-ui/icons/Clear';

const Post = () => {
    return (
        <div className="post">
            <div className="post__recommended">
                <h5>Answer  <span>Recommended for you</span></h5>
               
                <ClearIcon />
               
                
            </div>
            <div className="post__header">
                <Avatar className="avatar"/>
                <h4>Pablo Vélez</h4>
                <h5>Updated May 18</h5>

            </div>
            <div className="post__description">
                <h2>What are the signs</h2>
                <p>Yes, I admit I write this answer from my own experience not after reading some random article on “ 5 Signs You’re Wasting Life But You Can’t Admit It”.</p>
            </div>
            <img src="https://qph.fs.quoracdn.net/main-qimg-ca19b87b83c98e8be181b59a2dd62bdf" alt=""/>
        <div className="post__icons">
        <div className="post__iconsLeft">
        <span><ArrowUpwardIcon />2.8K</span>
        <span><LoopIcon />92</span>
        <span><ChatBubbleOutlineIcon />28</span>
        </div>
        <div className="post__iconsRight">
        <ShareIcon />
        <MoreHorizIcon />
        </div>
        </div>
        </div>
    )
}

export default Post

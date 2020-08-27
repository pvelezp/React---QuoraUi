import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
import GroupIcon from '@material-ui/icons/Group';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" alt=""/>
            </div>
        <div className="header__icon">
        <HomeIcon />
        <span>Home</span>
        </div>
        <div className="header__icon">
        <EditIcon />
        <span>Answer</span>
        </div>
        <div className="header__icon">
        <GroupIcon />
        <span>Spaces</span>
        </div>
        <div className="header__icon">
        <NotificationsIcon />
        <span>Notifications</span>
        </div>

        <div className="header__searchInput">
        <SearchIcon />
            <input type="text" placeholder="Search Quora"/>
        </div>

        <div className="headerRight">
            <div className="headerRight__avatar">
            <Avatar />
            </div>
            
            <LanguageIcon />
            <button >Add question</button>
        </div>


        </div>
    )
}

export default Header

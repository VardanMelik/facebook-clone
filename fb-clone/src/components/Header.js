import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
                    alt="fb"
                />
                <div className="header__input">
                    <SearchIcon/>
                    <input
                        placeholder="Search Facebook" 
                        type="text" />
                </div>
            </div>

            <div className="header__center">
                <div 
                    className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <StoreIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <AccountCircleOutlinedIcon />
                    <h4>Gagik</h4>
                </div>

                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreOutlinedIcon/>
                </IconButton>
            </div>
            
        </div>
    )
}

export default Header

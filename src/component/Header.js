import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import GamesIcon from '@material-ui/icons/Games';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import SearchIcon from "@material-ui/icons/Search";



function Header() {
    return (
        <div className="Header">
            <div className="logo">
                f
            </div>
            <div className="header-mid">
                <HomeIcon className="header-nav-item-main" />
                <PeopleAltIcon className="header-nav-item" />
                <SubscriptionsIcon className="header-nav-item" />
                <PersonPinIcon className="header-nav-item" />
                <GamesIcon className="header-nav-item" />                             
            </div>
            <div className="header-search">
                    <div className="searchForm">
                        <form>
                            <SearchIcon className="searchIcon" fontSize="small" />
                            <input type="text" id="filter" placeholder="Search" className="searchBarInput"/>
                        </form>
                    </div>
                    <button>Create</button>
            </div>
            <div className="header-end">
                <NotificationsIcon className="header-end-icon" />
                <WhatsAppIcon className="primary header-end-icon" />
                <ArrowDropDownCircleIcon className="header-end-icon" />
            </div>
        </div>
    )
}

export default Header

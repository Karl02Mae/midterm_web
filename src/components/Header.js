import React from 'react';
import './Header.css';

import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <div className="header__container">
            <div className="header__left">
                <h1 className="header__left__studRev">Student Review</h1>
                <GridViewIcon className="header__left__gridView" />
            </div>
            <div className="header__mid">
                <h3>Student List</h3>
                <h3>Student Evaluation</h3>
                <h3>Blog</h3>
            </div>
            <div className="header__right">
                <AccountCircleIcon className="header__right__avatar"/>
                <input className="header__right__input" type="text" placeholder=" Search" />
            </div>
        </div>
    )
}

export default Header

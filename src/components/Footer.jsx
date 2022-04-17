import React from 'react';
import styled from 'styled-components';
import User from "../assets/images/user1.png"
import { NavLink } from 'react-router-dom';

import { ReactComponent as Plus } from "../assets/icons/plusIcon.svg"
import { ReactComponent as BarsIcon } from "../assets/icons/barsIcon.svg"
import { ReactComponent as Search } from "../assets/icons/searchIcon.svg"
import { ReactComponent as Heart } from "../assets/icons/heartIcon.svg"


const Footer = () => {

    return (
        <Wrapper>
            <div className='footer-container'>
                <NavLink to="/main" className='footer-container__icon-box'>
                    <BarsIcon />
                </NavLink>
                <NavLink to="/search" className='footer-container__icon-box'>
                    <Search />
                </NavLink>
                <NavLink to="/createPost" className='footer-container__icon-box'>
                    <Plus />
                </NavLink>
                <NavLink to="/likes" className='footer-container__icon-box'>
                    <Heart />
                </NavLink>
                <NavLink to="/profile" className='footer-container__icon-box'>
                    <img src={User} alt="user" className='user' />
                </NavLink>
            </div>
        </Wrapper>
    );
}

export default Footer;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 52px;
    border-top: 1px solid #262626;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    z-index: 100;

    .footer-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer-container__icon-box {
        width: 75px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    } 

    .user {
        width: 23px;
        height: 23px;
    }

    /* .active {
        path {
            fill: #262626;
            d: "M19.6911 9.819C19.6911 4.39544 15.2824 0 9.84556 0C4.40868 0 0 4.39544 0 9.819C0 15.2426 4.40868 19.638 9.84556 19.638C11.91 19.638 13.8778 19.0012 15.519 17.8449L21.01 23.307C21.2059 23.5013 21.5223 23.5006 21.7174 23.3055L23.3073 21.7102C23.5007 21.5162 23.5019 21.2027 23.3101 21.0071L17.8897 15.482C19.0512 13.8443 19.6911 11.88 19.6911 9.819ZM3.55 9.85C3.55 6.37061 6.37061 3.55 9.85 3.55C13.3294 3.55 16.15 6.37061 16.15 9.85C16.15 13.3294 13.3294 16.15 9.85 16.15C6.37061 16.15 3.55 13.3294 3.55 9.85Z"
        }
    } */
`

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import icon

import Camera from "../assets/icons/cameraIcon.svg"
import Logo from "../assets/Logo/Logo.svg"
import TV from "../assets/icons/tvIcon.svg"
import Messange from "../assets/icons/messangerIcon.svg"


// import user

import User from "../assets/images/user1.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from '../utils/axios';
import PostPreview from '../components/PostPreview';
import Error from '../components/error';

const Main = () => {
    const navigate = useNavigate()
    const profileIdLocal = localStorage.getItem('profileId')
    const [post, setPost] = useState([]);
    const [like, setLike] = useState([]);
    const [follow, setFollow] = useState([])
    const [error, setError] = useState("")
    const [likeMy, setLikeMy] = useState([])

    useEffect(() => {

        API.get(`/like/my`)
            .then(res => setLikeMy(res.data))
            .catch(err => setError(err.message))

        API.get(`/post`)
            .then(res => setPost(res.data))
            .catch(err => setError(err.message))

        API.get(`/like/me`)
            .then(res => setLike(res.data))
            .catch(err => setError(err.message))
    }, [])

    useEffect(() => {
        API.get(`/following/followings/${profileIdLocal}`)
            .then(res => setFollow(res.data))
    }, [profileIdLocal])

    return (
        <Wrapper>
            <div className='main-container'>
                <div className='main-container__header'>
                    <div className='camera'>
                        <img src={Camera} alt='camera' />
                    </div>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='messager'>
                        <img src={TV} alt="tv" />
                        <img src={Messange} alt="messager" />
                    </div>
                </div>
                <div className='main-container__user'>
                    <div className='user-Box' onClick={() => navigate("/createStory")} >
                        <img src={User || `https://searching-server.herokuapp.com/attach/avatar/19`} alt="user" />
                        <p>Your Story</p>
                        <button>+</button>
                    </div>

                    {follow.map(({ username, id }) => {
                        return (
                            <div key={id} className='user-Box' onClick={() => navigate(`/user/${username}/${id}`)}>
                                <img src={User} alt="user" />
                                <p>{username.substr(0, 7)} {username.length > 7 ? "..." : ""}</p>
                            </div>
                        )
                    })}

                </div>
                <div className='main_container__post'>
                    {post.map(({ location, title, attachs, id, profileId }) => (
                        <PostPreview key={id} location={location} title={title} attachs={attachs} id={id} profileId={profileId} like={like} likeMy={likeMy} />
                    ))
                    }

                </div>
            </div>
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>
    );
}

export default Main;

const Wrapper = styled.div`
    .main-container__header {
        margin-top: 10px;
        padding: 0 16px 0 12px;
        height: 27px;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
    }

    .logo img {
        margin-top: 10px;
        width: 105px;
        height: 28px;
    }

    .messager {
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .messager img {
        float: right;
        margin: 0 9px;
    }

    .main-container__user {
        margin-top: 15px;
        padding: 9px 10px 8px 10px;
        width: 100%;
        height: 98px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 20px;
        overflow-y: scroll;
    }

    .main-container__user::-webkit-scrollbar {
        display: none;
    }

    .user-Box {
        width: 62px;
        height: 81px;
    }

    .user-Box:first-child {
        width: 62px;
        height: 81px;
        position: relative;
    }

    .user-Box:first-child button {
        position: absolute;
        bottom: 20px;
        right: 0px;
        text-align: center;
        width: 15px;
        height: 15px;
        line-height: 7px;
        border-radius: 50%;
        color: #fff;
        background-color: blue;
        border: 1px solid #fff;
     }

    .user-Box img {
        width: 62px;
        height: 62px;
        border-radius: 50%;
    }

    .user-Box p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01px;
        color: #262626;
    }

    .main_container__post {
        width: 100%;
        height: 521px;
        overflow-y: scroll;
    }

    .main_container__post::-webkit-scrollbar {
        display: none;
    }
`

const Post = styled.div``;
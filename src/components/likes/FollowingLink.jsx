import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchHeader from './SearchHeader';
import avatar from "../../assets/images/avatar.png"
import followingImg from "../../assets/images/followImg.png"
import API from '../../utils/axios';
import Error from '../error';

const FollowingLink = () => {

    const [image, setImage] = useState("");
    const [post, setPost] = useState([]);
    const [profile, setProfile] = useState();
    const [likeMe, setLikeMe] = useState([]);
    const [error, setError] = useState("")

    const data = [
        { id: 1, avatar: avatar, name: "Shamshod", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },

    ]
    //  https://searching-server.herokuapp.com/
    // axios.get("https://searching-server.herokuapp.com/following/followers/19").then(res => console.log(res))

    useEffect(() => {
        API.get("https://searching-server.herokuapp.com/like/me")
            .then(res => setLikeMe(res.data))
            .catch(res => setError(res.message))

        API.get(`https://searching-server.herokuapp.com/post/`)
            .then(res => setPost(res.data))
            .catch(res => setError(res.message))
    }, [])
    console.log(likeMe)
    // @mirabzal_07
    return (
        <Wrapper>
            <SearchHeader />
            <ul>
                {
                    likeMe.map(({ id }) => {
                        return (
                            <li key={Math.random()}>
                                <div className="avatar-info">
                                    <div className="avatar">
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p>jcnsakj</p>
                                </div>

                                <img src={`https://searching-server.herokuapp.com/attach/open/${id}`} alt="" />
                                {/* <button className='like-btn'>Follow</button> */}
                            </li>
                        )
                    })
                }
            </ul>
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>
    );
}

export default FollowingLink;

const Wrapper = styled.div`

    ul {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: calc(812px - 160px);

        ::-webkit-scrollbar {
            width: 0;
        }
        

        li {
            min-height: 60px;
            padding: 0 16px;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .like-btn {
                padding: 6px 23px;
                background: #3797EF;
                border-radius: 4px;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: -0.2px;
                color: #FFFFFF;
                border: none;
            }
            
            .avatar-info {
                display: flex;
                align-items: center;
                gap: 12px;

                .avatar {
                    background: linear-gradient(43.06deg, #FBAA47 13.86%, #D91A46 51.04%, #A60F93 85.38%);
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    position: relative;

                    img {
                        width: 46px;
                        height: 46px;
                        object-fit: cover;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 50%;
                        border: 2px solid white; 
                    }

                }                
                
            }
        }
    }
    
`

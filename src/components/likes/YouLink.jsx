import React from 'react';
import styled from 'styled-components';
import SearchHeader from './SearchHeader';
import avatar from "../../assets/images/avatar.png"
import followingImg from "../../assets/images/followImg.png"
import API from '../../utils/axios';
import Error from '../error';
import { useState } from 'react';

const YouLink = () => {

    const [error, setError] = useState("")
    const data = [
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
        { id: 1, avatar: avatar, name: "Keldiyor", image: followingImg },
    ]

    API.post("https://searching-server.herokuapp.com/following/follow/6")
        .then(res => console.log(res))
        .catch(err => setError(err.message))

    return (
        <Wrapper>
            <SearchHeader />
            <ul>
                {
                    data.map(({ avatar, name, image }) => {
                        return (
                            <li key={Math.random()}>
                                <div className="avatar-info">
                                    <div className="avatar">
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p>{name}</p>
                                </div>

                                <button className='youLike-btn'>Unfollow</button>
                            </li>
                        )
                    })
                }
            </ul>

            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>
    );
}

export default YouLink;

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

            .youLike-btn {
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

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchHeader from './SearchHeader';
import avatar from "../../assets/images/avatar.png"
import API from '../../utils/axios';
import Error from '../error';

const FollowingLink = () => {

    const [post, setPost] = useState([]);
    const [likeMe, setLikeMe] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        API.get("/like/me")
            .then(res => setLikeMe(res.data))
            .catch(res => setError(res.message))

        API.get(`/post`)
            .then(res => setPost(res.data))
            .catch(res => setError(res.message))

    }, [])
    return (
        <Wrapper>
            <SearchHeader />
            <div className='postLike-container'>
                {
                    likeMe.map(({ postId, profileId }) => post.map(({ attachs, id }) => {
                        if (postId === id) {
                            return (
                                <div className='content__box' key={Math.random()}>
                                    <div className='content__avatar'>
                                        <img src={avatar} alt="avatar" className='avatar' />
                                    </div>
                                    <div>
                                        <img src={`https://searching-server.herokuapp.com/attach/open/${attachs}`} alt="" className='post__img' />
                                    </div>
                                </div>
                            )
                        }
                    }
                    ))
                }
            </div>
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>
    );
}

export default FollowingLink;

const Wrapper = styled.div`

    .postLike-container {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: calc(812px - 160px);

        ::-webkit-scrollbar {
            width: 0;
        }   
    }

    .content__box {
        min-height: 60px;
        padding: 0 16px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    } 
    
    .content__avatar {
        display: flex;
        align-items: center;
        gap: 12px;
    }
                        
    .avatar {
        background: linear-gradient(43.06deg, #FBAA47 13.86%, #D91A46 51.04%, #A60F93 85.38%);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        position: relative; 
    }

    .post__img {
        width: 44px;
        height: 44px;
    }
    
    
`

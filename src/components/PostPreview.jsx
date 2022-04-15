import styled from "styled-components";
import { useEffect, useState } from "react";
import API from "../utils/axios";

import More from "../assets/icons/moreIcon.svg"
import Heart from "../assets/icons/heartIcon.svg"
import Comment from "../assets/icons/commentIcon.svg"
import Save from "../assets/icons/saveIcon.svg"
import Like from "../assets/icons/likeIcon.svg"
import Messange from "../assets/icons/messangerIcon.svg"
import btnLike from "../assets/icons/likeIcon2.svg"

import User from "../assets/images/user1.png"
import Error from "./error";
import PostSideBar from "./PostSideBar";

const PostPreview = ({ location, title, attachs, id, profileId }) => {
    localStorage.setItem("img", Heart)
    const [img, setImg] = useState(localStorage.getItem('img'))
    const [postid, setPostid] = useState(id);
    const [error, setError] = useState("")
    const [sidebar, setSideBar] = useState(false);
    const [postFullName, setPostFullName] = useState("");

    useEffect(() => {
        API.get(`/profile/${profileId}`).then(res => setPostFullName(res.data.fullName))
    }, [])

    function LikeDelete() {
        API.get(`/like/delete/${postid}`)
            .then(res => setImg(Heart))
            .catch(err => setError(err.message))
    }

    function AddLike() {
        const postMedias = document.querySelectorAll('.post-media')

        for (let postMedia of postMedias) {
            postMedia.addEventListener('click', () => {
                const reqBody = {
                    "postId": postid,
                }
                API.post(`/like`, reqBody)
                    .then(res => setImg(btnLike))
                    .catch(err => setError(err.message))

                const like = document.createElement('div'); like.classList.add("onClickLike")
                like.innerHTML = `<img src=${Like} alt="" />`
                setTimeout(() =>
                    like.remove()
                    , 1000)
                postMedia.append(like)
            })
        }
    }

    function BottomBar() {
        setSideBar(true)
    }

    return (
        <Wrapper>
            <div className="post-container">
                <div className='post-header'>
                    <div className='post-header__user-icon'>
                        <img src={User} alt="user" />
                        <div className='post-header__user-text'>
                            <p>{postFullName}</p>
                            <p>{location}</p>
                        </div>
                    </div>
                    <div onClick={BottomBar} >
                        <img src={More} alt="more-icon" />
                    </div>
                </div>

                <div className='post-media' onClick={AddLike}>
                    <img src={`https://searching-server.herokuapp.com/attach/open/${attachs[0]}`} alt="" />
                    <button>1/3</button>
                </div>

                <div className='post-footer'>
                    <div className='footer-icon'>
                        <div>
                            < img src={img} alt='heartIcon' onClick={LikeDelete} />
                            < img src={Comment} alt='heartIcon' />
                            <img src={Messange} alt='heartIcon' />
                        </div>

                        <div>
                            <img src={Save} alt="" />
                        </div>
                    </div>
                    <div className='footer-other'>
                        <img src={User} alt="user" />
                        <p>{postFullName}</p>
                    </div>
                    <p className='post-footer-comment'>{title}</p>
                </div>
            </div>

            {sidebar == true ? <PostSideBar id={id} profileId={profileId} /> : ""}

            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>
    )
}

export default PostPreview;

const Wrapper = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .post-header {
        padding: 11px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .post-header__user-icon {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .post-header__user-icon img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .post-header__user-text p:first-child {
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.1px;
        color: #262626;
    }

    .post-header__user-text p:last-child {
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.07px;
        color: #262626;
    }

    .post-media {
        width: 100%;
        height: 375px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .post-media img,
    .post-media video {
        max-width: 100%;
        height: 100%;
    }

    .post-media button {
        position: absolute;
        top: 14px;
        right: 14px;
        padding: 6px 8px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        background: rgba(18, 18, 18, 0.7);
        border-radius: 13px;
        color: #F9F9F9;
        border: none;
    }

    .onClickLike {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .post-footer {
        padding: 10px 14px;
    }

    .footer-icon {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer-icon img:nth-child(2){
        margin: 0 17px; 
    }

    .footer-other {
        margin-top: 8px;
        display: flex;
        align-items: center;
        gap: 6.5px;
    }

    .footer-other img {
        width: 17px;
        height: 14px;
        border-radius: 50%;
    }

    .footer-other p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.07px;
        color: #262626;
    }

    .footer-other p span {
        font-weight: 600;
        font-size: 15px;
    }

    .post-footer .post-footer-comment {
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.1px;
        color: #262626;
    }

    .post-sidebar {
        width: 100%;
        height: 300px;
        background-color: red;
    }
`
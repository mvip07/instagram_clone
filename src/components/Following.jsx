import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import API from "../utils/axios"
import avatar from "../assets/images/avatar.png"
import { useNavigate } from "react-router-dom"

function Following() {
    const profileIdLocal = JSON.parse(localStorage.getItem("profileId"))
    const navigate = useNavigate();
    const [follow, setFollow] = useState([])
    // const [unFollow, setUnfollow] = useState(0);

    useEffect(() => {
        API.get(`/following/followings/${profileIdLocal}`)
            .then(res => setFollow(res.data))
    }, [])

    function UnFollow(id) {
        API.post(`/following/unfollow/${id}`).then(res => console.log(res))
    }

    return (
        <Wrapper>
            <div className="follow-container">
                <div className="back">
                    <p onClick={() => navigate(-1)}>Cancel</p>
                </div>
                {follow.map(({ username, id }) => {
                    return (
                        <div key={Math.random()} className="content">
                            <div className="avatar-info">
                                <div className="avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <p>{username}</p>
                            </div>
                            <button className='youLike-btn' onClick={() => UnFollow(id)}>Unfollow</button>
                        </div>
                    )
                })}
            </div>
        </Wrapper>
    )
}
export default Following
const Wrapper = styled.div`

    .follow-container .back {
        padding: 6px 20px;
        width: 100%;
        height: 30px;
    }

    .follow-container .back p {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: #999;
        cursor: pointer;  
    }

    .follow-container .content {
        margin-top: 10px;
        min-height: 60px;
        padding: 0 16px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .follow-container .youLike-btn {
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
    .follow-container  .avatar-info {
        display: flex;
        align-items: center;
        gap: 12px;                     
    }
    .follow-container .avatar {
        background: linear-gradient(43.06deg, #FBAA47 13.86%, #D91A46 51.04%, #A60F93 85.38%);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        position: relative;
    } 

    .follow-container img {
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
`
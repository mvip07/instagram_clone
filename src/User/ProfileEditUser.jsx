import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
// import img 
import User from "../assets/images/user1.png"
import Error from '../components/error';
import API from '../utils/axios';
const ProfileEditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams()

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [website, setWebsite] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("")

    useEffect(() => {
        const inputs = document.querySelectorAll('input')
        API.get(`/profile/${id}`)
            .then(res => {
                inputs[0].value = res.data.fullName; setName(res.data.fullName);
                inputs[1].value = res.data.username; setUsername(res.data.username);
                inputs[2].value = res.data.website; setWebsite(res.data.website);
                inputs[3].value = res.data.bio; setBio(res.data.bio);
                inputs[4].value = res.data.email; setEmail(res.data.email);
                inputs[5].value = res.data.phone; setPhone(res.data.phone);
                inputs[6].value = res.data.gender; setGender(res.data.gender);
            })
            .catch(res => setError(res.message))
    }, [id])

    function ProfileUpdate() {
        const reqBody = {
            "fullName": name,
            "username": username,
            "website": website,
            "bio": bio,
            "email": email,
            "phone": phone,
            "gender": gender
        }

        API.put(`https://searching-server.herokuapp.com/profile/update/${id}`, reqBody)
            .then(res => console.log("Succsecc"))
            .catch(res => setError(res.message))
    }

    // function LogOut() {
    //     API.delete(`profile/delete/${id}`)
    //         .then(res => console.log(res))
    //         .catch(res => setError(res.message))
    // }

    return (
        <Wrapper>
            <div className='edit-profile-container'>
                <div className='edit-profile__header'>
                    <p onClick={() => navigate(-1)}>Cancel</p>
                    <b>Edit Profile</b>
                    <span onClick={ProfileUpdate}>Done</span>
                </div>
                <div className='edit-profile__change-profile-photo'>
                    <img src={User} alt="user" />
                    <p>Change Profile Photo</p>
                </div>
                <div className='edit-profile__user-info'>

                    <div>
                        <p>Name</p>
                        <p>Username</p>
                        <p>Website</p>
                        <p>Bio</p>
                    </div>

                    <div>
                        <input type="text" placeholder="FullName" onChange={({ target }) => setName(target.value)} />
                        <input type="text" placeholder="Username" onChange={({ target }) => setUsername(target.value)} />
                        <input type="text" placeholder="Website" onChange={({ target }) => setWebsite(target.value)} />
                        <input type="text" placeholder="Bio" onChange={({ target }) => setBio(target.value)} />
                    </div>
                </div>
                <div className='edit-profile__privateInformation'>
                    <h4>Switch to Professional Account</h4>
                    <h5>Private Information</h5>
                    <div className='professionalAccount__info'>
                        <div>
                            <p>Email</p>
                            <p>Phone</p>
                            <p>Gender</p>
                        </div>

                        <div>
                            <input type="text" placeholder="Email" onChange={({ target }) => setEmail(target.value)} />
                            <input type="text" placeholder="Phone" onChange={({ target }) => setPhone(target.value)} />
                            <input type="text" placeholder="Gender" onChange={({ target }) => setGender(target.value)} />
                        </div>

                    </div>
                </div>
            </div>
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper >
    );
}

export default ProfileEditUser;

const Wrapper = styled.div`

.edit-profile-container {
        margin-top: 12px;
        width: 100%;
        height: 100%;
    }

    .edit-profile__header {
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .edit-profile__header p {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.33px;
        color: #262626;
    }

    .edit-profile__header b {
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.33px;
        color: #262626;
    }

    .edit-profile__header span {
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -0.33px;
        color: #3897F0;
    }

    .edit-profile__change-profile-photo {
        margin-top: 11px;
        padding: 18.5px 0 12px 0;
        text-align: center;
        width: 100%;
        height: 160.5px;
        border-radius: 50%;        
    }

    .edit-profile__change-profile-photo  img {
        width: 95px;
        height: 95px;
    }

    .edit-profile__change-profile-photo p {
        margin-top: 12.5px;
        font-weight: 600;
        font-size: 13px;
        line-height: 21px;
        letter-spacing: -0.05px;
        color: #3897F0;
    }

    .edit-profile__user-info {
        width: 100%;
        height: 208px;
        display: flex;
        align-items: center;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .edit-profile__user-info div {
        width: 100px;
        height: 100%;
        padding: 0 16px;
    }

    .edit-profile__user-info div p {
        padding: 15px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.25px;
        color: #262626;
    }

    .edit-profile__user-info div:last-child {
        width: 100%;
        p:not(p:first-child) {
            border-top: 1px solid rgba(0, 0, 0, 0.2);
        }
    }

    .edit-profile__privateInformation  h4 {
        padding: 16px 0 15px 16px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.25px;
        color: #3897F0;
    } 

    .edit-profile__privateInformation h5 {
        padding: 14px 16px; 
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: -0.25px;
        color: #262626;
    }

    .professionalAccount__info {
        display: flex;
        align-items: center;
    }

    .professionalAccount__info div {
        width: 100px;
        height: 100%;
        padding: 0 16px;
    }
    .professionalAccount__info div p {
        padding: 15px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.25px;
        color: #262626;
    }

    .professionalAccount__info div:last-child {
        width: 100%;
        p:not(p:first-child) {
            border-top: 1px solid rgba(0, 0, 0, 0.2);
        }
    }

    input {
        padding: 10px 15px;
        margin: 6px 0 12px 0;
        width: 100%;
        height: 35px;
        background: #FAFAFA;
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 5px;
        outline: none;
    }

    .logout__btn {
        display: block;
        margin: 10px auto;
        width: 90%;
        height: 44px;
        border: none;
        background: #3797EF;
        border-radius: 5px;
        opacity: 0.7;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: -0.15px;
        color: #fff;
        cursor: pointer;
    }
`

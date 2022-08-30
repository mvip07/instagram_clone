import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../../assets/Logo/Logo.svg"
import faceBookIcon from "../../assets/icons/Icon.svg"
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Error from '../error';

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSave, setLoginSave] = useState("Log in");
    const [error, setError] = useState("")

    function LoginSubmit() {
        setLoginSave("Loading...")
        axios.post("https://searching-server.herokuapp.com/auth/login", {
            "username": username,
            "password": password,
        }).then(res => {
            localStorage.setItem("user-token", res.data.jwt)
            localStorage.setItem("username", res.data.username)
            localStorage.setItem("profileId", res.data.id)
            navigate("/main");
            setLoginSave("Log in")
        })
            .catch(err => { setError(err.message); setLoginSave("Log in") })

    }
    return (
        <Wrapper>
            <div className='login-container'>
                <div className="login-container__back" onClick={() => navigate("/account")}>
                    <FontAwesomeIcon icon={faAngleLeft} className="icon" />
                </div>
                <div className="login-container__input">
                    <img src={Logo} alt="" />
                    <input type={"text"} placeholder="Username" className='input' onChange={({ target }) => setUsername(target.value)} />
                    <input type={"password"} placeholder="Password" className='input' onChange={({ target }) => setPassword(target.value)} />
                    <p className="forgotPassword">Forgot password?</p>
                    <button onClick={LoginSubmit}>{loginSave}</button>
                    <div className="login-Facebook">
                        <img src={faceBookIcon} alt="" />
                        <p>Log in with Facebook</p>
                    </div>

                    <div className="login_container__input__or">
                        <div className="line"></div>
                        <p>Or</p>
                        <div className="line"></div>
                    </div>
                    <p className="accountSignup">Don’t have an account? <span onClick={() => navigate("/account/signup")}> Sign up.</span></p>
                </div>

                <div className="login-container-login__footer">
                    <p>Instagram от Facebook</p>
                </div>
            </div>
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>
    );
}

export default Login;

const Wrapper = styled.div`
    .login-container {
        padding: 12px 16px 0 16px;
        * {
            display: block;
        }
    }

    .login-container__back .icon {
        font-size: 20px;
    }

    .login-container__input {
        text-align: center;
        margin: 94px auto;
    }

    .login-container__input img {
        margin: 0 auto 39px auto;
    }

    .login-container__input input {
        padding: 13.5px 15px;
        margin-bottom: 12px;
        width: 100%;
        height: 44px;
        background: #FAFAFA;
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 5px;
        outline: none;
    }

    .login-container__input input::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: rgba(0, 0, 0, 0.2);
    }

    .login-container__input .forgotPassword {
        margin-top: 19px;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        letter-spacing: 0.15px;
        color: #3797EF;
    }

    .login-container__input button {
        margin: 30px auto 37px auto;
        width: 100%;
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

    .login-container__input .login-Facebook {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        * {
            margin: 0;
        }
    }

    .login-container__input .login-Facebook p {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: #3797EF;
        cursor: pointer;
    }

    .login_container__input__or {
        margin: 41.5px auto;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 30.5px;
    }

    .login_container__input__or p {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    .login_container__input__or .line {
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .login-container__input .accountSignup {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: -0.15px;
        color: rgba(0, 0, 0, 0.4);
    }

    .login-container__input .accountSignup span {
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        text-align: right;
        letter-spacing: 0.15px;
        color: #3797EF;
        cursor: pointer;
    }

    .login-container-login__footer {
        padding: 32.5px 0;
        width: 100%;
        height: 79px;
        border-top: 1px solid rgba(0, 0, 0, 0.4);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);     
    }

    .login-container-login__footer p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01px;
        color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
`

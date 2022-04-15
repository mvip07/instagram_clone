import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../assets/images/logo.png"
import Fade from 'react-reveal/Fade';

const Loading = () => {

    const navigate = useNavigate()

    setTimeout(() => navigate("/account"), 2000)

    return (
        <Wrapper>
            <Fade right cascade>
                <div className="loading">
                    <img src={logo} alt="instagram" />
                    <h2>Instagram</h2>
                </div>
            </Fade>
        </Wrapper>
    );
}

export default Loading;

const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(180deg, #833AB4 0%, #5B51D8 100%);
    text-align: center;

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        letter-spacing: -0.33px;
        color: #FFFFFF;
        margin-top: 16px;
    }    

    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

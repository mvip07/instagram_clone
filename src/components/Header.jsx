import React, { useState } from 'react';
import styled from 'styled-components';

import signal from "../assets/images/Mobile Signal.svg"
import wifi from "../assets/images/Wifi.svg"
import battery from "../assets/images/Battery.svg"
// 
const Header = () => {
    const [data, setData] = useState(`${new Date().getHours()}:${new Date().getMinutes() < 10 ? "0" : ""}${new Date().getMinutes()}`)
    setInterval(() => {
        setData(`${new Date().getHours()}:${new Date().getMinutes() < 10 ? "0" : ""}${new Date().getMinutes()}`)
    }, 1000)
    return (
        <Wrapper>
            <h2>{data}</h2>
            <div className="icons">
                <img src={signal} alt="" />
                <img src={wifi} alt="" />
                <img src={battery} alt="" />
            </div>

        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 7px;
    }

    h2 {
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #171717;
    }
    `

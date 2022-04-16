import styled from "styled-components"
import Logo from "../../assets/Logo/Logo.svg"
import User from "../../assets/images/user1.png"
import { useNavigate } from "react-router-dom"
function Account() {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <div className="account-container">
                <div className="account-container__logo">
                    <img src={Logo} alt="" />
                </div>

                <div className="account-container__user">
                    <img src={User} alt="" />
                    <p>mirfzal</p>
                </div>

                <div className="account-container__btn">
                    <button onClick={() => navigate("/account/login")}>Login</button>
                    <p>Switch accounts</p>
                </div>

                <div className="account-container__register">
                    <p>Don’t have an account? <span onClick={() => navigate("/account/signup")}> Sign up</span> </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Account
const Wrapper = styled.div`
    .account-container {
        margin-top: 196px;
        text-align: center;
    }

    .account-container__user {
        margin-top: 52px;
    }

    .account-container__user img {
        width: 85px;
        height: 85px;
        border-radius: 50%;
    }

    .account-container__user p {
        margin-top: 13px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: #262626;
    }

    .account-container__btn {
        margin-top: 12px;
        padding: 0 32px;
        width: 100%;
    }

    .account-container__btn button {
        width: 100%;
        height: 43px;
        background: #3797EF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        border: none;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: #FFFFFF;
    }

    .account-container__btn p {
        margin-top: 31px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: -0.15px;
        color: #3797EF;
    } 
    
    .account-container__register {
        padding: 18px 0 52px 0;
        width: 100%;
        height: 84px;
        border-top: 1px solid rgba(0, 0, 0, 0.4);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .account-container__register p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01px;
        color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    .account-container__register p span {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.005px;
        color: #262626;
    }
`
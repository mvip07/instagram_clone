import styled from "styled-components";

const Error = ({ error }) => {

    setTimeout(() => {
        const errorDelete = document.querySelector('.delete')
        errorDelete.remove()
    }, 3000)

    return (
        <Wrapper className="delete">
            <div className="error">
                <div className="alert" role="alert">
                    <p>{error}</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Error;

const Wrapper = styled.div`    
    padding: 20px;

    .error {
        width: 90%;
        position: absolute;
        top: 70px;
        left: 5%;
        color: #842029;
        background-color: #f8d7da;
        border-color: #f5c2c7;
        border-radius: 5px;
        animation-name: error;
        animation-duration: 2s;
        z-index: 10000000;

        @keyframes error {
            0% {
                left: 120%;
                opacity: 0;

            }

            100% {
                left: 5%;
                opacity: 1;
            }
        }
        
    }

    .closebtn {
        width: 100%;
        position: absolute;
        left: 120%;
        color: #842029;
        background-color: #f8d7da;
        border-color: #f5c2c7;
        border-radius: 5px;
        animation-name: closeBtn;
        animation-duration: 2s;
        opacity: 0;

        @keyframes closeBtn {
            0% {
                left: 5%;
                opacity: 1;
            }

            100% {
                left: 120%;
                opacity: 0;
            }
        }
    }

    .alert {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 16px;
    }

    button {
        font-size: 20px;
        border: none;
        background-color: #f8d7da;
    }

`
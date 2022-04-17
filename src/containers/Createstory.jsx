import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Error from "../components/error";
import API from "../utils/axios";

const CreatePost = () => {
    const navigate = useNavigate()

    const [file, setfile] = useState(null);
    const [hashtag, setHashteg] = useState("");
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [btnText, setBtnText] = useState("Save");
    const [error, setError] = useState("")

    const submit = () => {
        setBtnText("Loading...")
        let form = new FormData();
        form.append("file", file);
        form.append("hashtag", hashtag);
        form.append("location", location);
        form.append("title", title);

        API.post("/attach/upload/POST", form)
            .then(res => {
                const reqBody = {
                    "title": title,
                    "location": location,
                    "hashtag": hashtag,
                    "attachs": [
                        res.data.id
                    ]
                }
                API.post("/post", reqBody)
                    .then(res => { setBtnText("Save"); navigate("/main") })
                    .catch(err => setError(err.message))
            })
            .catch(err => { setError(err.message); setBtnText("Save") })

    }

    return (
        <Wrapper>
            <div className="createPost-container">
                <h3 className="createPost-container__title">Create Post</h3>
                <div className="createPost-container__input">
                    <input type="file" placeholder="Enter your file" onChange={({ target }) => setfile(target.files[0])} />
                    <input type="text" placeholder="Enter your Hashtag" onChange={({ target }) => setHashteg(target.value)} />
                    <input type="text" placeholder="Enter your Location" onChange={({ target }) => setLocation(target.value)} />
                    <input type="text" placeholder="Enter your Title" onChange={({ target }) => setTitle(target.value)} />
                </div>
                <div className="createPost-container-btn">
                    <button onClick={submit} className="btn btn-create">{btnText}</button>
                </div>
            </div>
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>

    )
}

export default CreatePost

const Wrapper = styled.div`

    .createPost-container {
        padding: 0 30px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .createPost-container__title {
      text-align: center;
      font-size: 32px;
      line-height: 37px;
      color: #000;
      margin: 10px 0;
    }
    .createPost-container__input input {
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
    .createPost-container__input input::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: rgba(0, 0, 0, 0.2);
    }

    .createPost-container-btn button {
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
`;

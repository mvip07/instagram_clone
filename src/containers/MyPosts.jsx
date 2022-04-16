import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Error from "../components/error";
import PostPreview from "../components/PostPreview"
import API from "../utils/axios";

function MyPosts() {

    const navigate = useNavigate()

    const [post, setPost] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        API.get(`https://searching-server.herokuapp.com/post/my`)
            .then(res => setPost(res.data))
            .catch(res => setError(res.message))
    }, [])

    return (
        <Wrapper>
            <div className="back" onClick={() => navigate(-1)}>
                <p>Back</p>
            </div>
            {post.map(({ location, title, attachs, id, profileId }) => (<PostPreview key={id} location={location} title={title} attachs={attachs} id={id} profileId={profileId} />))}
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>
    )
}
export default MyPosts
const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 698px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    .back {
        position: sticky;
        top: 0;
        left: 0;
        padding: 20px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.3px;
        color: #262626;
        background-color: #f5f5f5;
    }
`    
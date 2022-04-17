import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import Error from "../components/error";
import PostPreview from "../components/PostPreview"
import API from "../utils/axios";

function UserMyPosts() {

    const navigate = useNavigate()
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        API.get(`/post/profile/${id}`)
            .then(res => { setPost(res.data); console.log(res) })
            .catch(res => setError(res.message))
    }, [id])

    return (
        <Wrapper>
            <div className="back" onClick={() => navigate(-1)}>
                <p>Back</p>
            </div>
            {post.map(({ location, title, attachs, id }) => (<PostPreview key={id} location={location} title={title} attachs={attachs} id={id} />))}
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper>
    )
}
export default UserMyPosts
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
        z-index: 1000;
    }
`    
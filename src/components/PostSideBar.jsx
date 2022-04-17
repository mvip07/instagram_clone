import styled from "styled-components"
import API from "../utils/axios"

function PostSideBar({ profileId, id }) {
    console.log(profileId, id)
    function RemovSideBar() {
        const RemovSideBar = document.querySelector('.post__sidebar')
        RemovSideBar.classList.toggle('removPostSidebar')
    }

    function DeletePost() {
        API.delete(`/post/delete/${id}`)
            .then(res => console.log("Succsess"))
        //.catch(err => setError(err.message))
    }

    return (
        <Wrapper >
            <div className="post__sidebar">
                <p>Block</p>
                <p>Report Post</p>
                <p>Share Post</p>
                <p className="delete" onClick={DeletePost}>Delete Post</p>
                <p onClick={RemovSideBar}>Cancel</p>
            </div>
        </Wrapper>
    )
}

export default PostSideBar
const Wrapper = styled.div`

    .post__sidebar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 260px;
        z-index: 100;
        background-color: #f9f9f9;
    }    

    p {
        padding: 4px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin: 10px 0;
        text-align: center;
        font-size: 20px;
        color: #3897F0;
    }

    .delete {
        color: red;
    }

    .removPostSidebar {
        position: absolute;
        bottom: -500px;
        left: 0;
    }
`
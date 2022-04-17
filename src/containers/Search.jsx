import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/search/Card';
import { useNavigate } from 'react-router-dom';

import searchimg from "../assets/images/search.svg"
import API from '../utils/axios';
import Error from '../components/error';
import axios from 'axios';

const Search = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [img, setImg] = useState([]);

    useEffect(() => {
        axios.get(`https://searching-server.herokuapp.com/post`)
            .then(res => setImg(res.data))
            .catch(err => setError(err.message))
    }, [])
    const Search = (value) => {

        // if (!(value === "")) {
        //     API.get(`/post/hashtag/${value}`).then(res => {
        //         const usernameSaerch = res.data

        //         usernameSaerch.map(({ username }) => {
        //             let faceData = []
        //             let name = username.toUpperCase()
        //             if ((name.search(value.toUpperCase()) >= 0) && (value.trim() !== ""))
        //                 faceData.push(username)
        //             setData(faceData)
        //         })
        //     })
        // }

        if (!(value.trim() === "")) {

            API.get(`/profile/username/${value}`)
                .then(res => {
                    const usernameSaerch = res.data
                    usernameSaerch.map(({ username, id, password }) => {
                        let faceData = []
                        let name = username.toUpperCase()
                        if ((name.search(value.toUpperCase()) >= 0) && (value.trim() !== ""))
                            faceData.push(username, id, password)
                        setData(faceData)
                    })
                })
                .catch(res => setError(res.message)
                )
        }

    }

    return (
        <Wrapper>
            <div className='search-container'>
                <div className="search">
                    <input type="text" placeholder='Search' onChange={({ target }) => Search(target.value)} />
                    <img src={searchimg} alt="" />
                </div>
                <ul className="users">
                    <div className='link'>
                        {/* <img src={`https://searching-server.herokuapp.com/attach/avatar/22`} alt='' /> */}
                        <h2 className='item-username' onClick={() => navigate(`/user/${data[0]}/${data[1]}`)}>{data[0]}</h2>
                    </div>
                </ul>
                <div className="cards">
                    {img.map(({ attachs, id }) => <Card key={id} attachs={attachs} id={id} />)}
                </div>

            </div>
            {error.length > 0 ? <Error error={error} /> : ""}
        </Wrapper >
    );
}

export default Search;

const Wrapper = styled.div`

    .search-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }
        
    .search {
        position: relative;        
    }

    .search input {
        width: calc(100% - 16px);
        height: 36px;
        margin: 4px 8px 12px;
        padding-left: 34px;
        border-radius: 10px;
        background: rgba(118, 118, 128, 0.12);
        outline: none;
        border: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.3px;
    }

    .search input::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.3px;
        color: rgba(60, 60, 67, 0.6);
    }

    .search img {
        position: absolute;
        top: calc(50% - 4px);
        left: 26px;
        transform: translate(-50%, -50%);
    }

    .cards {
        margin-top: 50px;
        height: 570px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(124px, 1fr));
        grid-auto-rows: 124px;
        grid-auto-flow: dense;
        gap: 1px;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 0;
        }
    }    

    .users {
        position: absolute;
        top: 48px;
        width: 100%;
        max-height: 164px;
        overflow-y: auto;
        display: flex;
        padding: 0 8px;
        background-color: #fff;

        ::-webkit-scrollbar {
            width: 0;
        }
    }

    .users a {
        width: 100%;
        height: 36px;
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
    }

    .users a img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }

    
`

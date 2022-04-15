import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SearchHeader = () => {

    return (
        <Wrapper>
            <nav className="links">
                <NavLink className='link' to="/likes/following">Following</NavLink>
                <NavLink className='link' to="/likes/you">You</NavLink>
            </nav>
        </Wrapper>
    );
}

export default SearchHeader;

const Wrapper = styled.div`
    .links {
        display: flex;
        justify-content: space-around;

        .link {
            height: 44px;
            width: 100%;
            text-align: center;
            text-decoration: none;
            
            font-weight: 600;
            font-size: 16px;
            line-height: 44px;
            letter-spacing: -0.33px;
            color: rgba(0, 0, 0, 0.4);
            
            &.active{
                color: #262626;
                border-bottom: 1px solid #262626;
            }
        }
    }
    
`

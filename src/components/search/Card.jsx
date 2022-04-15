import React from 'react';
import styled from 'styled-components';

const Card = ({ attachs, id }) => {

    return (
        <Wrapper id={id}>
            <img src={`https://searching-server.herokuapp.com/attach/open/${attachs}`} alt="" />
        </Wrapper>
    );
}

export default Card;

const Wrapper = styled.div`
    grid-column: span ${({ id }) => ((id - 2) % 7 === 0) ? "2" : "1"};
    grid-row: span ${({ id }) => ((id - 2) % 7 === 0) ? "2" : "1"};
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`

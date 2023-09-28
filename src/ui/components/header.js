import React from 'react';
import styled from 'styled-components'

export default function Header({}){

    return(
        <Nav>
            <img src='/images/nwu_logo.png' alt='NWU-logo'></img>

        </Nav>
    )
}

const Nav = styled.nav`
    max-width: 100%;
    display: flex;
    align-items: center; 
    justify-content: center;
    background: var(--stroke, #70298D);
    padding: 15px;

    

    img{
        width: 120px;

        @media (max-width: 768px) {
            
            width: 70px;
            
        }
    }

`;
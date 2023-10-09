import React from "react";
import { styled } from "styled-components";

export default function TopSection(){

    return(
        <Container>
            NTULI, D.L ({"39043169"})

            <SectionCard>

                Self Registration
            </SectionCard>

        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    color: black;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 1000px) {
        
        width: 100%;
        font-size: 20px;
        
        
    }
    

`;

const SectionCard = styled.div`
    text-align: center;
    border-radius: 5px;
    background: #D9D9D9;
    padding: 18px ;
    color: #766B6B;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 10px;

    @media (max-width: 1000px) {
        
        font-size: 12px;
        padding: 10px
        
        
    }
`;
import React from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";
import Header from "../components/header";
import Module from "../components/module";
import TopSection from "../components/topsection";

import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";


export default function Select(){

    const [{list},dispatch] = UseStateValue();


    const isInvalid = list.length === 0 ;

    const navigate = useNavigate();

    const executeNext = (event) =>{
        event.preventDefault();
        navigate(ROUTES.CHECKOUT)
    }

    return (
        <Container>
            <Header/>
            

            <Section>

                <div className="content">
                    <TopSection/>
                    <Heading>Modules Selection</Heading>

                    <div className="modules_selection">
                        <h1>Select modules</h1>
                        <div className="modules_sec">
                            <Module 
                            id ={"2515531"}
                            code={"INFS SOMETHING"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}

                            />

                            <Module 
                            id ={"2515532"}
                            code={"INFS SOMETHING"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}

                            />

                            <Module 
                            id ={"2515533"}
                            code={"INFS SOMETHING"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}

                            />

                            <Module 
                            id ={"2515534"}
                            code={"INFS SOMETHING"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}

                            />
                        </div>

                    </div>

                    <NextButton disabled = {isInvalid}
                    onClick={executeNext}> Next </NextButton>
                    

                </div>
                
            </Section>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    

`;

const Section = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 18px;
    

    .content{
        display: flex;
        width: 60%;
        flex-direction: column;

        @media (max-width: 1000px) {
            width: 100%;
            
        
         
        }
        
    }

    .modules_selection{
        margin-top: 40px;
        h1{
            font-size: medium;
            font: 600;
        }
    }

    .modules_sec{
        margin-top: 20px;
    }
`;

const Heading = styled.h1`
    color: black;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 40px;
`;

const NextButton = styled.button`
    display: flex;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 100%;
    color: black;
    border-radius: 0.375rem;
    background: var(--stroke, #70298D);
    transition-duration: 167ms;
    font-size: 20px;
    font-weight: 700;
    box-shadow: none;
    border: 0;
    cursor: pointer;

    &:hover{
        background-color: #5f2e7399;
    }
    &:disabled{
        opacity: 0.5;
    }
    


`;
import React, { useEffect } from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";
import Header from "../components/header";
import Module from "../components/module";
import TopSection from "../components/topsection";

import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";


export default function Select(){
    useEffect(() => {
        document.title = 'NWU-Registration'
      
        
    }, [])
      

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
                            id ={"211"}
                            code={"INFS 211"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}
                            credits={18}
                            />

                            <Module 
                            id ={"212"}
                            code={"INFS 212"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}
                            credits={18}
                            />

                            <Module 
                            id ={"213"}
                            code={"INFS 213"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}
                            credits={18}
                            />

                            <Module 
                            id ={"214"}
                            code={"INFS 214"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}
                            credits={18}
                            />

                            <Module 
                            id ={"221"}
                            code={"INFS 221"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}
                            credits={18}
                            />

                            <Module 
                            id ={"222"}
                            code={"INFS 222"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}
                            credits={18}
                            />

                            <Module 
                            id ={"223"}
                            code={"INFS 223"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}
                            credits={18}
                            />

                            <Module 
                            id ={"224"}
                            code={"INFS 224"}
                            name= {"Web Programing gjgjgj fhjbhbfg fgjbgb fguu"}
                            credits={18}
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
        padding-bottom: 50px;

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
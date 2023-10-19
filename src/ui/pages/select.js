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

    const [{list,modules , userData}] = UseStateValue();

      
    const modulesList = filterArrays(modules ,userData.completedModules)
    
    console.log('completed modules' ,userData.completedModules);

    function filterArrays(array1, array2) {
        const filteredArray = array1.filter(item1 => {
            // Check if item.id is included in array2
            return !array2.includes(item1.moduleId);
          });
        
        return filteredArray;
    }
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
                            

                            {modulesList?(
                                modulesList.map((module,i) =>(
                                    <Module 
                                    key={module.id}
                                    id ={module.id}
                                    code={module.moduleId}
                                    name= {module.name}
                                    credits={module.credits}
                                    prereq={module.prerequisites
                                    }
                                    />
                                ))

                            ):(
                                <Module 
                                    id ={""}
                                    code={""}
                                    name= {""}
                                    credits={""}
                                    />
                            )}

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
    flex-direction: column;
    
    

`;

const Section = styled.div`
    display: flex;
    max-width: 100%;
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
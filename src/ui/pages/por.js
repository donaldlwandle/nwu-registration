import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";

import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from "@mui/material/colors";
import ReactToPrint from "react-to-print";
import { getCurrency } from "../../utils/currency-format";
import { style } from "@mui/system";



export default function ProofOfReg(){
    useEffect(() => {
        document.title = 'NWU-Registration'
      
        
    }, [])
      

    const [{total,list,userData}] = UseStateValue();
    const[toggleChecked,setToggleChecked] = useState(false);
    const navigate = useNavigate();

    const component = useRef();



    let date = new Date();

    const executeNext = (event) =>{
        
        navigate(ROUTES.REGISTERED)
       
    }



    return (
        <Container>
            

            <Section>

                <Content >
                    
                    
                    <RegistrationStatus ref={component}  className="registration-status">

                        
                        

                        <Logos>
                            <div>
                                <img src="/images/nwupor.png"/>
                            </div>

                            <div className="adress">
                                Private Bag X2046, Mmabatho
                                South Africa, 2735 <br/><br/>
                                Tel: (018) 389-2111
                                Web: http://www.nwu.ac.za
                            </div>
                        </Logos>
                        <Heading>PROOF OF REGISTRATION 2023</Heading>
                        <StatusText className=" status_text">
                            It is hereby certified that
                        </StatusText>
                        <TotalText className=" total_text">
                            <span>{userData && userData.fullName}</span>
                        </TotalText>

                        <StatusText className=" status_text">
                            is registered as a student on the Mahikeng Campus
                            (NWU Faculty of Economic and Management Sciences)
                        </StatusText>
                        
                        
                        <DetailsText className=" details_text">
                            for
                            {/* <span> Payment processed on :{date.toLocaleDateString()}</span> */}
                        </DetailsText>
                        <TotalText className=" total_text">
                            <span>BACHELOR OF COMMERCE IN INFORMATION SYSTEMS</span>
                        </TotalText>

                        <DetailsText className=" details_text">
                            <span> (5GV H01 2)

                                Curriculum - INFORMATION SYSTEMS (E301M)

                                FULL TIME ( Not Final)
                            </span>
                        </DetailsText>
                        <StatusText className=" status_text">
                            Academic year : 2<br/>
                            Historical year : 2
                        </StatusText>

                        <DetailsText className=" details_text">
                            Registered Modules:
                            
                        </DetailsText>

                        <Modules>
                            {list && list.map(item => (
                                    <p>{item.code}</p>

                                ))}
                        </Modules>

                        <Logos>
                            <DetailsText className=" details_text">
                                <span> Registration Date:{date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</span>
                            </DetailsText>

                            <DetailsText className=" details_text">
                                <span> Date of Issue:{date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</span>
                            </DetailsText>
                        </Logos>

                        <Logos>

                            <div className="nwu-logo">
                                <img src='/images/NWU-white-logo.png' alt='NWU-logo'></img>
                            </div>
                        </Logos>


            
                        

                    </RegistrationStatus>

                    

                    

                    <ReactToPrint  trigger={() =>(

                        <div className="receipt_container" >
                            

                            <span>Print the POR</span>

                        </div>
                        

                    )}

                    content = {() => component.current}
                    />

                    {/* <NextButton 
                        
                        type="submit"
                        onClick={executeNext}> Next 
                    </NextButton> */}
                        

                    

                    
                    

                </Content>
                
            </Section>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    

`;
const Logos = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    

    img{
        width: 300px;
        height: 150px;
    }

    .adress{
        width: 300px;
        padding-top: 10px;
    }
    .nwu-logo{
        margin-top: 25px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;


        img{
        width: 90px;
        height: 90px;
     }
    }

`;

const Modules = styled.div`
    display: flex;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 25px;
    justify-content: space-around;
`

const RegistrationStatus = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    width: 100%;
    

    svg{
        width: 100px;
        height: 100px;
    }

`

const StatusText = styled.div`
    text-align: center;
    padding: 10px 100px;
    font-weight: 500;
    font-size: 16px;
    color: grey;

    @media (max-width: 720px) {
        width: 100%;
        padding: 10px;
        
    
        
    }

`;


const TotalText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px 100px;
    font-weight: 500;
    font-size: 16px;
    color: black;

    span{
        font-family: Allerta;
        margin-top: 5px;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    @media (max-width: 720px) {
        width: 100%;
        padding: 10px;
        
    
        
    }

`;

const DetailsText= styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 25px 100px;
    font-weight: 500;
    font-size: 16px;
    color: black;
    align-items: center;

    span{
        font-size: 25px;
        font-family: Allerta;
        margin-top: 5px;
        color: grey;
    }

    img{
        width: 90px;
        height: 90px;
    }

    @media (max-width: 720px) {
        width: 100%;
        padding: 10px;
        
    
        
    }

`;



const Section = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 18px;
    


    .receipt_container{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        
        span{
            padding-left: 5px;
            text-decoration: underline;
            font-weight: 500;
            color: #702A8D;
            cursor: pointer;

            

        }
    }

    

   

    

    


    

    .total{
        background: #702A8D;
        padding: 5px 35px;
        border-radius: 0px 0px 5px 5px;
        font-weight: 500;
        justify-content: center;
        


    }

    
`;

const Content = styled.div`
    display: flex;
    width: 80%;
    padding: 20px;
    flex-direction: column;
    padding-bottom: 50px;

    @media (max-width: 1000px) {
        width: 100%;
        
    
        
    }
`

const Heading = styled.h1`
    color: black;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 20px;
    text-align: center;
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
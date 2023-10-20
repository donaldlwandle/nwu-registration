import React, { useEffect } from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";
import Header from "../components/header";
import TopSection from "../components/topsection";

import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";
import CheckoutModule from "../components/checkout-module";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from "@mui/material/colors";


export default function Registered(){
    useEffect(() => {
        document.title = 'NWU-Registration'
      
        
    }, [])
      

    const [{list,userData}] = UseStateValue();
    const navigate = useNavigate();

    const executePOR = (event) =>{
        event.preventDefault();

       
    }



    return (
        <Container>
            <Header/>
            

            <Section>

                <div className="content">
                    <TopSection/>
                    <Heading>Registration Complete</Heading>

                    <div className="registration-status">
                        <CheckCircleIcon fontSize="large" sx={{ color: green[500] }} />
                        <div className=" status_text">
                            You have been officialy registered with the NWU for BCom Information system, Have a great day.
                            
                        </div>
                        

                    </div>

                    <NextButton 
                    onClick={executePOR}> Finish </NextButton>
                    

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

    .registration-status{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        width: 100%;
        h1{
            font-size: medium;
            font: 600;
        }

        svg{
            width: 120px;
            height: 120px;
        }
    }

    .status_text{
        color: #2ab514;
        text-align: center;
        padding: 10px 100px;
        font-weight: 600;
        font-size: 20px;

        @media (max-width: 720px) {
            width: 100%;
            padding: 10px;
            font-size: 16px;
        
         
        }

    }

    .table_head{
        display: flex;
        flex-direction: row;
        border-radius: 10px 10px 0px 0px;
        background: #702A8D;
        


    }

    .table_body{
        display: flex;
        padding: 200;
        flex-direction: column;
        border-style: solid;
        border-width: 0 2px 2px 2px;
        border-color: #702A8D;
        border-radius: 0px 0px 0px 5px;
    }

    .stroke{
        width: 2px;
        background-color: grey;
        
    }

    .col1{
        display: flex;
        width: 65%;
        padding: 10px;
        justify-content: center;
        font-size: medium;
        font-weight: 500;
    }

    .col2{
        display: flex;
        padding: 10px;
        justify-content: center;
        font-size: medium;
        font-weight: 500;
        padding-left: 20px;
    }

    .table_tail{
        display: flex;
 
        justify-content: end;
    }

    .total{
        background: #702A8D;
        padding: 5px 35px;
        border-radius: 0px 0px 5px 5px;
        font-weight: 500;
        justify-content: center;
        


    }

    
`;

const Heading = styled.h1`
    color: black;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 40px;
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
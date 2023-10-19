import React, { useEffect, useRef } from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";
import Header from "../components/header";
import TopSection from "../components/topsection";

import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";
import CheckoutModule from "../components/checkout-module";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from "@mui/material/colors";
import jsPDF from "jspdf";
import ReactToPrint from "react-to-print";


export default function Receipt(){
    useEffect(() => {
        document.title = 'NWU-Registration'
      
        
    }, [])
      

    const [{list,userData}] = UseStateValue();
    const navigate = useNavigate();

    const component = useRef();

    let rand = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
    });

    let date = new Date();

    const executeNext = (event) =>{
        
        navigate(ROUTES.REGISTERED)
        //generatePdf();
        

       
    }
    
    const generatePdf =() =>{
        //window.print();
    }



    return (
        <Container>
            

            <Section>

                <div className="content" >
                    
                    
                    <div ref={component}  className="registration-status">
                        

                        <CheckCircleIcon fontSize="large" sx={{ color: green[500] }} />
                        <Heading>Thank you for your Payment</Heading>
                        <div className=" status_text">
                            Your Outstanding fees have been payed succesfully.
                        </div>
                        <div className=" total_text">
                            Payment Amout:
                            <span>{rand.format(11300 + userData.balanceOwing)}</span>
                        </div>

                        <div className=" details_text">
                            Payment Details:
                            <span> Payment processed on :{date.toLocaleDateString()}</span>
                        </div>

                        <div className=" details_text">
                            <span> Payment processed at :{date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</span>
                        </div>

                        <div className=" details_text">
                            Payment method:
                            <span> PaEFT (CHECK)
                            </span>
                            <span> XXXX0000</span>
                        </div>

                        <div className=" details_text">
                            <img src='/images/NWU-white-logo.png' alt='NWU-logo'></img>
                            <span> POR ON THE WAY</span>
                        </div>
                        

                    </div>

                    <ReactToPrint trigger={() =>(
                        <NextButton 
                        onClick={executeNext}> Next </NextButton>
                    )}

                    content = {() => component.current}
                    />
                        

                    

                    
                    

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
        

        svg{
            width: 100px;
            height: 100px;
        }
    }

    .status_text{
        
        text-align: center;
        padding: 10px 100px;
        font-weight: 500;
        font-size: 16px;
        color: grey;

        @media (max-width: 720px) {
            width: 100%;
            padding: 10px;
            
        
         
        }

    }

    .total_text{
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

    }

    .details_text{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 10px 100px;
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
    color: #2ab514;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 10px;
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
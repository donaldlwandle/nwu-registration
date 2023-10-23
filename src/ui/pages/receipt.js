import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green, grey } from "@mui/material/colors";
import ReactToPrint from "react-to-print";
import { getCurrency } from "../../utils/currency-format";



export default function Receipt(){
    useEffect(() => {
        document.title = 'NWU-Registration'
      
        
    }, [])
      

    const [{list,userData}] = UseStateValue();
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
                        

                        <CheckCircleIcon fontSize="large" sx={{ color: green[500] }} />
                        <Heading>Thank you for your Payment</Heading>
                        <StatusText className=" status_text">
                            Your Outstanding fees have been payed succesfully.
                        </StatusText>
                        <TotalText className=" total_text">
                            Payment Amout:
                            <span>{getCurrency(11300 + userData.balanceOwing)}</span>
                        </TotalText>

                        <DetailsText className=" details_text">
                            Payment Details:
                            <span> Payment processed on :{date.toLocaleDateString()}</span>
                        </DetailsText>

                        <DetailsText className=" details_text">
                            <span> Payment processed at :{date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</span>
                        </DetailsText>

                        <DetailsText className=" details_text">
                            Payment method:
                            <span> PaEFT (CHECK)
                            </span>
                            <span> XXXX0000</span>
                        </DetailsText>

                        <DetailsText className=" details_text">
                            <img src='/images/NWU-white-logo.png' alt='NWU-logo'></img>
                            <span> Proof Of Residence ON THE WAY</span>
                        </DetailsText>
                        

                    </RegistrationStatus>

                    

                    

                    <ReactToPrint  trigger={() =>(

                        <div className="receipt_container" >
                            

                            <span>Print the Receipt</span>

                        </div>
                        

                    )}

                    content = {() => component.current}
                    />

                    <NextButton 
                        
                        type="submit"
                        onClick={executeNext}> Next 
                    </NextButton>
                        

                    

                    
                    

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
        width: 60%;
        flex-direction: column;
        padding-bottom: 50px;

        @media (max-width: 1000px) {
            width: 100%;
            
        
         
        }
`

const Heading = styled.h1`
    color: #2ab514;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 10px;
    text-align: center;
`;


const CheckBox = styled.div`
    display: flex;
    align-items: center;
    width: 25px;
    height: 25px;
    justify-content: center;
    background: none;
    

    svg{
        width:100%;
        height: 100%;
    }
    
    @media (max-width: 760px) {
        
        width: 30px;
        height: 30px;

    
    }


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
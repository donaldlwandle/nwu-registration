import React, { useEffect } from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";
import Header from "../components/header";
import TopSection from "../components/topsection";
import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";
import CheckoutModule from "../components/checkout-module";
import PaystackPop from '@paystack/inline-js'
import { getCurrency } from "../../utils/currency-format";
import { getOutstanding, getRecidenceFee, tuition } from "../../utils/calculator";



export default function ConfirmPayment(){
    useEffect(() => {
        document.title = 'NWU-Registration'
      
        
    }, [])
      

    const [{list,userData ,accountData}] = UseStateValue();
    console.log('Liast ############# : ',list)

    const totalCost = 2220 + tuition(list,userData)+ getRecidenceFee(userData) + getOutstanding(accountData);


    


    const isInvalid = list.length === 0 ;

    const navigate = useNavigate();


    const executeNext = (event) =>{
        event.preventDefault();
        const email = userData.emailAddress;
        const fName = "Donald";
        const lName ="Ntuli";


        const paystack = new PaystackPop();
        paystack.newTransaction({
            key:"pk_test_41483ff8b0d09020737de5cb734fcafd4a40fadb",
            amount:5,
            email,
            fName,
            lName,

            onSuccess(transaction){
                let message =`Payment Complete! Reference ${transaction.reference}`
                alert(message)
                navigate(ROUTES.RECEIPT)
            },

            onCancel(){
                alert("Transaction processing canceled!")
            },

            onDeclined(){
                alert("Transaction declined!")

            }


        })

        //
   
    }

    return (
        <Container>
            <Header/>
            

            <Section>

                <div className="content">
                    <TopSection/>
                    <Heading>Minimum first payment</Heading>
                    <div className="subtext">
                        The following amounts are <span>payable before registration.</span> you will not be able to register until
                        these amounts have been payed.
                    </div>

                    <div className="modules_selection">
                        
                         
                        <div className="payment_details">
                            

                            <div className="row">
                                <div>
                                    NWU RegistrationFees
                                </div>

                                <div>
                                    {getCurrency(2220)}
                                </div>

                            </div>


                            <div className="row">
                                <div>
                                    First Payment on Tuition Fees
                                </div>

                                <div>
                                    {getCurrency(tuition(list,userData))}
                                </div>

                            </div>

                            {userData.residence ==="campus"?(
                                
                                <div className="row">
                                    <div>
                                        First Payment on Residence Fees
                                    </div>

                                    <div>
                                        {getCurrency(getRecidenceFee(userData))}
                                    </div>

                                </div>

                            ):(``)}


                            {accountData.balanceOwing > 100?(
                                
                                <div className="row">
                                    <div>
                                        Outstanding Fees
                                    </div>

                                    <div>
                                        {getCurrency(getOutstanding(accountData))}
                                    </div>

                                </div>

                            ):(``)}



                           
                            

                            

                        </div>
                        
                        <div className="payment_total">
                            <div className="total">
                                Total   : {getCurrency(totalCost)}
                            </div>

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
    

    .subtext{
        margin-top: 15px;
        font-size: medium;
        font-weight: 400;

        span{
            color: #702A8D;
            font-weight: bold;
        }

        
    }


    .modules_selection{
        display: flex;
        flex-wrap:wrap;
        flex-direction: column;
        margin-top: 40px;
        width: 100%;
        h1{
            font-size: medium;
            font: 600;
        }
    }

    .row{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;

        font-weight: 600;
        font-size: 20px;

        @media (max-width: 720px) {
            width: 100%;
            padding: 10px;
            font-size: 16px;
        
         
        }
    }

    

    .payment_details{
        display: flex;
        width: 100%;
        flex-direction: column;
        border-style: solid;
        border-width: 2px;
        border-color: #702A8D;
        border-radius: 5px 5px 0px 5px;
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

    .payment_total{
        display: flex;
 
        justify-content: end;
    }

    .total{
        background: #702A8D;
        padding: 5px 35px;
        border-radius: 0px 0px 5px 5px;
        justify-content: center;
        font-weight: 600;
        font-size: 20px;

        @media (max-width: 720px) {
            font-size: 16px;
        
         
        }
        


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
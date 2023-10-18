import React, { useEffect } from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";
import Header from "../components/header";
import TopSection from "../components/topsection";

import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";
import CheckoutModule from "../components/checkout-module";


export default function Checkout(){
    useEffect(() => {
        document.title = 'NWU-Registration'
      
        
    }, [])
      

    const [{list}] = UseStateValue();

    const getTotalLength =(arr) => {
        // Use the reduce method to sum up the length property of each item
        const totalLength = arr.reduce((accumulator, currentItem) => {
          if (typeof currentItem.credits === 'number') {
            return accumulator + currentItem.credits;
          } else {
            console.log(`Item does not have a valid length property: ${JSON.stringify(currentItem)}`);
            return accumulator;
          }
        }, 0);
      
        return totalLength;
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
                    <Heading>Modules Checkout</Heading>

                    <div className="modules_selection">
                        <div className="table_head">
                            <div className="col1"> MODULE</div>
                            <div className="stroke"></div>
                            <div className="col2">CREDITS</div>

                        </div>
                         
                        <div className="table_body">
                            {list.map(item => (
                                <CheckoutModule
                                    id={item.id}
                                    code={item.code}
                                    name={item.name}
                                    credits={item.credits}
                                />

                            ))}
                            

                            

                        </div>
                        
                        <div className="table_tail">
                            <div className="total">
                                Total   : {getTotalLength(list)}
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

    .modules_selection{
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        width: 100%;
        h1{
            font-size: medium;
            font: 600;
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
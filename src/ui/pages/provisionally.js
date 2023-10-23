import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { UseStateValue } from "../../lib/context/stateProvider";
import Header from "../components/header";
import TopSection from "../components/topsection";

import * as ROUTES from '../../utils/constants/routes'
import { useNavigate } from "react-router-dom";
import CheckoutModule from "../components/checkout-module";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { green, grey } from "@mui/material/colors";
import { getCurrency } from "../../utils/currency-format";



export default function Provisionaly(){
    useEffect(() => {
        document.title = 'NWU-Registration'
      
        
    }, [])


      

    const [{accountData,userData ,sponsor}] = UseStateValue();
    const navigate = useNavigate();
    const [files, setFiles] = useState(null);
    const [isUpload, setIsUpload] = useState(false);

    const inputRef = useRef();
    
    
    const executePayment = (event) =>{
        event.preventDefault();
        navigate(ROUTES.CONFIRM_PAYMENT)

        
        
    }

    const handleOnDrag= (event) =>{
        event.preventDefault();
        
        
   
    }

    const handleOnDrop= (event) =>{
        event.preventDefault();
        setFiles(event.dataTransfer.files)
        
 
    }


    const uploadNsfas = (event) =>{
        event.preventDefault();
        if(files){
            setIsUpload((isUpload) => !isUpload)

        }
        
 
    }

    const uploadBursary = (event) =>{
        event.preventDefault();
        if(files){
            setIsUpload((isUpload) => !isUpload)

        }
        
    }



    return (
        <Container>
            <Header/>
            

            <Section>

                <div className="content">
                    <TopSection/>
                    <Heading>You have been provisionally registered!</Heading>

                    <div className="registration-status">
                        <NewReleasesIcon sx={{ color: grey[500] }} />
                        <div className=" status_text">

                            { sponsor ==="self" && accountData.balanceOwing > 100? (
                                <p>

                                    To be be fully registered you have to pay your 
                                    outstanding fee of <span>{getCurrency(accountData.balanceOwing)}</span> and the <span>Minimum first payment</span>

                                </p>
                                

                            ):(``)}

                            { sponsor ==="self" && accountData.balanceOwing < 100? (
                                <p>

                                    To be be fully registered you have to pay your <span>Minimum first payment</span>

                                </p>
                                

                            ):(``)}


                            { sponsor ==="bursary"  ? (
                                <div>
                                    <p>

                                        You are Provisionally registered until your <span>Bursary Letter</span> has been verified <br/>
                                        <span>Upload your bursary letter below</span> 

                                     </p>

                                     {!files && 
                                        <div className="dropzone" onDragOver={handleOnDrag} onDrop={handleOnDrop}>
                                            <h1>
                                                drag or drop files

                                            </h1>

                                            <br/>

                                            <h1>
                                
                                                or
                                            </h1>

                                            <input type={"files"}
                                            multiple
                                            hidden
                                            ref={inputRef}
                                            onChange={(event) => setFiles(event.target.files)}/>
                                            <button onClick={() => inputRef.current.click()}>Select files</button>
                                        </div>
                                     
                                     }

                                    {files && 
                                        <div className="dropzone" >
                                            <ul>
                                                {Array.from(files).map((file,idx) => <li key={idx}>{file.name}</li>)}
                                            </ul>
                                            
                                        </div>
                                     
                                     }

                                     

                                </div>
                                
                                

                            ):(``)}

                            
                            { sponsor ==="nsfas" ? (
                                <div>

                                    <p>
                                        You have an outstanding  amount  of <span>{getCurrency(accountData.balanceOwing)}</span> outside your NSFAS funding due to one of the following reasons :<br/>
                                        <span>
                                            <ul>
                                                <li>Outstanding payments from NSFAS of the previous year(s)</li>
                                                <li>Legitimate charges on the student account that will not be covered by NSFAS such 
                                                    as charges for second exam opportunities etc.
                                                </li>
                                                <li>
                                                    Outstanding balance for the year(s) in which the student was not funded by NSFAS and will not be covered by NSFAS
                                                </li>
                                            </ul>
                                            <br/>
                                            
                                        </span>
                                        You will be Provisionally Registered until Your signed <span>Acknowledgement of Debt (AOD) document</span> has been Approved.
                                            Upload The AOD FORM Below.

                                    </p>

                                    {!files && 
                                        <div className="dropzone" onDragOver={handleOnDrag} onDrop={handleOnDrop}>
                                            <h1>
                                                drag or drop files

                                            </h1>

                                            <br/>

                                            <h1>
                                
                                                or
                                            </h1>

                                            <input type={"files"}
                                            multiple
                                            hidden
                                            ref={inputRef}
                                            onChange={(event) => setFiles(event.target.files)}/>
                                            <button onClick={() => inputRef.current.click()}>Select files</button>
                                        </div>
                                     
                                     }

                                    {files && 
                                        <div className="dropzone" >
                                            <ul>
                                                {Array.from(files).map((file,idx) => <li key={idx}>{file.name}</li>)}
                                            </ul>
                                            
                                        </div>
                                     
                                     }

                                     {isUpload &&
                                        <div>
                                            File Uploaded....
                                        </div>
                                     }

                                </div>

                            ):(``)}
                            
                        </div>
                        

                    </div>

                    {sponsor ==='nsfas'? (
                        <NextButton disabled={isUpload}
                        onClick={uploadNsfas}> Upload AOD </NextButton>
                    ):(``)}

                    {sponsor ==='bursary'? (
                        <NextButton disabled={isUpload}
                        onClick={uploadBursary}> Upload bursary letter </NextButton>
                    ):(``)}

                    {sponsor ==='self'? (
                        <NextButton 
                        onClick={executePayment}> Make payment </NextButton>
                    ):(``)}
                    
                    

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
        color: grey;
        text-align: center;
        padding: 10px 100px;
        font-weight: 600;
        font-size: 20px;

        @media (max-width: 720px) {
            width: 100%;
            padding: 10px;
            font-size: 16px;
        
         
        }

        span{
            color: #702A8D;
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

    .dropzone{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 250px;
        border: 4px dashed grey;
        margin-top: 20px;
        padding: 20px;
        font-size: inherit;
        font-weight: inherit;

        @media (max-width: 720px) {
            height: 150px;
  
        }

        button{
            padding: 10;
            font-size: medium;
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
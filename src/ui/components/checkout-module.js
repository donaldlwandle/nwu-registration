import React, { useState } from 'react'
import styled from "styled-components"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { green, grey } from '@mui/material/colors';
import { UseStateValue } from '../../lib/context/stateProvider';


export default function CheckoutModule({id,code,name , credits}) {
    

    

  return (
    <Container  >
        <div className='col1'>
            {code}

        </div>

        <div className='stroke'>

        </div>

        <div className='col2'>
            {credits}

        </div>

        
    </Container>
  )
}

export const Container = styled.div`
    display: flex;
    width:100%;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: grey;
`;

export const Start = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 10px;

    @media (max-width: 720px) {
        padding-right: 5px;
            
        
         
    }
`;

export const Center = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 600px;
    padding: 0 10px;

    @media (max-width: 720px) {
        max-width: 300px;
        padding: 0 5px;
            
        
         
    }

    .center_row1{
        margin-bottom: 10px;
        font-size: large;
        color: black;
        font-weight: 400;
    }

    .center_row2{
        margin-bottom: 10px;
        font-size: small;
        color:gray;
    }
`;

export const End = styled.div`

`;


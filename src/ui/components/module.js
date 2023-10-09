import React, { useState } from 'react'
import styled from "styled-components"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { green, grey } from '@mui/material/colors';
import { UseStateValue } from '../../lib/context/stateProvider';


export default function Module({id,code,name}) {
    const [{list},dispatch] = UseStateValue();


    console.log("this is the basked" , list);

    const isValid = list.length <3;

    // 👇️ check if array contains object
    const isFound = list.some(element => {
        if (element.id === id) {
        return true;
        }

        return false;
    });


    const executeSelection = ()=>{ 
        
        //if is in the list remove{
            if(isFound){
                //remove from basked if it already exist
                
                dispatch({
                    type:'REMOVE_FROM_LIST',
                    id:id,
                })

            }else{
                //add to basked when checked/seleted
                if(isValid){
                    dispatch({
                        type: 'ADD_TO_LIST',
    
                        item: {
                            id:id,
                            code:code,
                            name:name,
                        }
                    });
    

                }
                

            }
        

        

    }

  return (
    <Container  onClick={executeSelection}>
        <Start>
            {isFound ? (
                <CheckCircleIcon sx={{ color: green[500] }} />
            ) : <RadioButtonUncheckedIcon  sx={{ color: grey[500] }} /> }
            
        </Start>

        <Center className="center">
            <div className="center_row1">
                {code}
            </div>
            <div className="center_row2">
                {name}
            </div>

        </Center>

        
    </Container>
  )
}

export const Container = styled.div`
    display:flex;
    padding:10px 0;
    
    &:hover{
        background: whitesmoke;
        cursor: pointer;
    }
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


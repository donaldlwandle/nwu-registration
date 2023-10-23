import React, { useState } from 'react'
import styled from "styled-components"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { green, grey } from '@mui/material/colors';
import { UseStateValue } from '../../lib/context/stateProvider';
import { getCurrency } from '../../utils/currency-format';


export default function Module({id,code,name,credits,prereq,cost}) {
    const [{list,userData},dispatch] = UseStateValue();
    const [missingItems, setMissingItems] = useState('');

    

    // 👇️ check if array contains object
    const isFound = list.some(element => {
        if (element.id === id) {
        return true;
        }

        return false;
    });

    const isMetPrereqz= (array1, array2) => {
        const missing = array1.filter(item => !array2.includes(item));
        
        if (missing.length > 0) {
          setMissingItems(`You must to complete: ${missing.join(', ')}`);
          return false;
        } else {
          setMissingItems('');
          return true;
        }
    }
    
    

    const isValid = list.length <12  ;


     const executeSelection = ()=>{ 
        
        //if is in the list remove{
            if(isFound ){
                //remove from basked if it already exist
                
                dispatch({
                    type:'REMOVE_FROM_LIST',
                    id:id,
                })

            }else{
                //add to basked when checked/seleted
                if(isValid){
                    if(isMetPrereqz(prereq, userData.completedModules)){
                        dispatch({
                            type: 'ADD_TO_LIST',
        
                            item: {
                                id:id,
                                code:code,
                                name:name,
                                credits:credits,
                                cost:cost
                            }
                        });
        
    
                    }

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
            {missingItems?(<Error>{missingItems}</Error>) :name }
                
            </div>

        </Center>

        <End>
            {getCurrency(cost)}

        </End>

        
    </Container>
  )
}

export const Container = styled.div`
    display:flex;
    width: 100%;
    padding:10px 0;
    
    
    &:hover{
        background: whitesmoke;
        cursor: pointer;
    }
`;

export const Start = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 10%;
    justify-content: center;
    padding-right: 10px;

    @media (max-width: 720px) {
        padding-right: 5px;
            
        
         
    }
`;

export const End = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 20%;
    justify-content: center;
    padding-right: 10px;
    

    @media (max-width: 720px) {
        padding-right: 5px;
            
        
         
    }
`;

export const Center = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
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



export const Error =styled.p`
    color: #cf0f0f;
    font-weight: 600;
`;


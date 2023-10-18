import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";
import TopSection from "../components/topsection";
import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { green, grey } from "@mui/material/colors";
import {useNavigate , useLocation} from 'react-router-dom'
import * as ROUTES from '../../utils/constants/routes'
import { UseStateValue } from "../../lib/context/stateProvider";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

export default function DashBoard(){
    const [{ firebaseApp ,user,userData},dispatch] = UseStateValue();

    async function executeGetUserData(){
        const q = query(collection(getFirestore(firebaseApp), "students"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const [uData] = querySnapshot.docs.map((item)=>({
            ...item.data(),
            docId:item.id

        }));

        

        dispatch({
            type:'SET_USER_DATA',
            userData:uData
          });

    }

    async function getModules(){
        const q = query(collection(getFirestore(firebaseApp), "modules"));
        const querySnapshot = await getDocs(q);

        const modulesData = querySnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()

        }));

        dispatch({
            type:'SET_MODULES',
            modules:modulesData
          });

        

    }
    

    useEffect(() => {
        document.title = 'NWU-Registration'
        executeGetUserData();
        getModules();
        
        
      
        
    }, [])

    
    

    

    
    
      

    /// use state checkbox
    const[toggleChecked,setToggleChecked] = useState(false);

    //navigation
    const navigate = useNavigate();
    

    const executeNext = (event) =>{
        event.preventDefault();

       navigate(ROUTES.SELECT);
    }

    return(

        <Container>

            <Header/>

            <Section>
                

                <Content>
                    <TopSection/>
                    <h1>Qualifification Registration Selection</h1>
                    
                    <ConfirmSec onClick={()=> setToggleChecked((toggleChecked) => !toggleChecked)}>
                        <div>
                            
                            <label>
                                <CheckBox >
                                    {toggleChecked ? (
                                        // <img src='/images/check.png' alt='checked'/>
                                        <CheckCircleIcon sx={{ color: green[500] }} />
                                    ):<RadioButtonUncheckedIcon  sx={{ color: grey[500] }} />}
                                    
                                </CheckBox>
                                
                                
                            </label>
                            <span>
                                By registering you agree to the university's
                                <a href="https://www.nwu.ac.za/gov_man/policy/index.html"
                                    target={"_blank"}
                                    rel="noreferrer" 
                                >  terms and conditions</a>

                            </span>
                            
                        </div>
                    </ConfirmSec>

                    <YearTitle>
                        <p>Registration year 2024</p>
                    </YearTitle>

                    <Table>
                        <Row1>
                            <Col1>
                                Qualification Programe Level

                            </Col1>
                            <Stroke/>

                            <Col2>
                                Status
                            </Col2>



                        </Row1>

                        <Row2>

                            <Col1>
                                BCOM INFORMATION SYSTEMS

                            </Col1>
                            <Stroke/>

                            <Col2>
                                {userData && !userData.isRegistered? (`Register`) :`Registered` }
                                
                            </Col2>

                        </Row2>
                    </Table>

                    <NextButton disabled={!toggleChecked}
                    type="submit"
                    onClick={executeNext}
                    > Next </NextButton>
                    


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

const Section = styled.section`
    display: flex;
    padding: 18px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        
        
         
    }


`;

const Content =styled.div`
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    flex-direction: column;
    @media (max-width: 1000px) {
        
        width: 100%;
         
    }
    h1{
        color: black;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 40px;
    }

`;

const ConfirmSec = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    cursor: pointer;

    @media (max-width: 1000px) {
        
        width: 100%;

        
    }

    div{
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 400;
        justify-content: space-around;

    
        

        @media (max-width: 1000px) {
        
            font-size:16px;

        
        }
        
        
        label{

            display: inline-flex;
            color: black;
            align-items: center;
            margin-right: 5px;
            
            

            

        }

        a{
            color: #70298D;
            text-decoration: none;

            &:hover{
                text-decoration: underline;
                
            }

        }

    }

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

const YearTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
    color: #999999;
    line-height: normal;
    margin-top: 30px;

    @media (max-width: 760px) {
        

    }

`;

const Table = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 30px;

    @media (max-width: 760px) {
        
        
         
    }

    
`;

const Row1 =styled.div`
    background-color: #70298D;
    display: flex;
    flex-direction: row;
    border: 1px solid var(--stroke, #70298D);
    border-radius: 5px 5px 0px 0px;


`;

const Row2 =styled.div`
    border-radius: 0px 0px 5px 5px;
    border: 1px solid var(--stroke, #70298D);
    background: #FFFBFB;
    display: flex;
    flex-direction: row;



`;
const Col1 =styled.div`
    width: 400px;
    padding: 6px;
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 1000px) {
        
        width: 240px;
         
    }
`;
const Col2 =styled.div`
    padding: 6px;
    font-size: 16px;
    font-weight: 500;
`;

const Stroke =styled.div`
    width: 1px;
    background-color: grey;
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
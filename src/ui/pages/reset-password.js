import React from 'react';
import styled from 'styled-components'
import {useNavigate } from 'react-router-dom'
import { useContext , useState , useEffect} from 'react';
import FirebaseContext from '../../lib/context/firebaseContext';
import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
import Header from '../components/header';
import { Link } from 'react-router-dom';



import * as ROUTES from '../../utils/constants/routes'

export default function ResetPassword() {

    // App anvigation
    const navigate = useNavigate();
    
    //calling database context
    const { firebaseApp } = useContext(FirebaseContext);

    //state for storing form inputs
    const [email , setEmail] = useState('');

    //usestate for input errors
    const [error , setError] = useState('');

    //check if string has numbers
    function containsNumber(str) {
        return /[0-9]/.test(str);
    }

    // uses state for input validation
    const isInvalid = email === '' 
    || !email.includes("@") || !email.includes(".") 
    || !email.includes("nwu") || !containsNumber(email) ;

    // hande login
    const executeResetPassword =async ( event ) => {
        event.preventDefault();

        try {

            await sendPasswordResetEmail(getAuth(firebaseApp),email.toLowerCase());

            navigate(-1);
            
        } catch (error) {
            
            setEmail("");
            setError(error.message);
        }

    }

    useEffect(() => {
      document.title = 'Login-NWU'
    
      
    }, [])
    


        
    
    return (
        <Container>
            <Header/>

            <Section>
                <Hero>
                    <Heading> Reset password.</Heading>
                    <SubHeading>Enter your NWU student email address and we will send you a password reset link.</SubHeading>
                    
                </Hero>

                <Form onSubmit={executeResetPassword} method="POST">

                    {error && <Error> {error}</Error>}

                    <StudentNo  placeholder='Student email'
                     type={'text'}
                     onChange={({target}) => setEmail(target.value)} />

                    <SignInButton disabled={isInvalid}
                    type="submit"
                    >Send password reset email</SignInButton>
                </Form>

            </Section>
        </Container>

    );
         

}



const Container = styled.div`
    max-width: 100%;
    padding: 0px;

`;

const Nav = styled.nav`
    display: flex;
    align-items: center; 
    justify-content: center;
    background: var(--stroke, #70298D);
    padding: 10px;

    

    img{
        width: 120px;

        @media (max-width: 768px) {
            
            width: 70px;
            
        }
    }

`;

const Section = styled.section`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    max-width: 1128px;
    margin: auto;
    padding: 40px 10px 18px 18px;
    justify-content: center;
    

    
    @media (max-width: 1000px) {
        
        padding-top: 50px;
        margin: 0;
        
        
    }

`;

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`;

const SubHeading = styled.p`
    width: 100%;
    margin: 20px 0 0 0;
    font-size: 32px;
    line-height: 44px;
    font-weight: 500;
    margin-top: 20px;
    text-align: center;
    
    color: #263238;

    @media (max-width: 768px ) {
        width: 100%;
        font-size: 24px;
        line-height: 32px;
    }

`;

const Heading = styled.p`
    width: 100%;
    font-size: 80px;
    line-height: 80px;
    font-weight: 700;
    text-align: center;
    
    color: black;

    @media (max-width: 768px ) {
        width: 100%;
        font-size: 48px;
        line-height: 52px;
    }

    @media (min-width: 1012px){
        
        font-size: 96px ;
        line-height: 100px ;
        
    }    
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    width:380px;
    padding-right: 10px;
    align-items: center;

 
   
    


`;

const Error = styled.div`
    background: white;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 16px;
    color: #cf0f0f;
    padding: 15px 20px;

`;

const SignInButton = styled.button`
    display: flex;
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

const StudentNo = styled.input`
    display: flex;
    justify-content: start;
    text-align: start;
    padding-left:20px;
    height: 3rem;
    width: 95%;
    border-radius: 0.375rem;
    transition-duration: 167ms;
    font-size: 16px;
    margin-bottom: 30px;
    font-weight: 200;
    border: 1px solid #dedede;
    background: #D9D9D9;
    color: black;
    

    &:focus{
        outline: 2px solid #70298D;  

    }
    

    

`;



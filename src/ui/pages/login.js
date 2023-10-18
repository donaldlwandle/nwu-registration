import React from 'react';
import styled from 'styled-components'
import {useNavigate } from 'react-router-dom'
import { useContext , useState , useEffect} from 'react';
import FirebaseContext from '../../lib/context/firebaseContext';
import { getAuth,signInWithEmailAndPassword  } from 'firebase/auth';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import useUserData from "../../lib/hooks/get-user-data";



import * as ROUTES from '../../utils/constants/routes'
import { UseStateValue } from '../../lib/context/stateProvider';



export default function Login() {

    useEffect(() => {
        document.title = 'Login-NWU'
      
        
    }, [])
      

    // App anvigation
    const navigate = useNavigate();
    
    //calling database context
    const [{ firebaseApp ,user}] = UseStateValue();

    //state for storing form inputs
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    //usestate for input errors
    const [error , setError] = useState('');

    //check if string has numbers
    function containsNumber(str) {
        return /[0-9]/.test(str);
    }

    // uses state for input validation
    const isInvalid = password === '' || email === '' 
    || !email.includes("@") || !email.includes(".") 
    || !email.includes("nwu") || !containsNumber(email) ;

    // hande login
    const executeLogin =async ( event ) => {
        event.preventDefault();

        try {

            await signInWithEmailAndPassword(getAuth(firebaseApp),email.toLowerCase() ,password);
            
            navigate(ROUTES.DASHBOARD);
            
        } catch (error) {
            
            setEmail("");
            setPassword("");
            setError(error.message);
        }

    }

    


        
    
    return (
        <Container>
            <Header/>

            <Section>
                <Hero>
                    <Heading> Let's sign you in.</Heading>
                    <SubHeading>Welcome to NWU student registration portal.</SubHeading>
                    <div>
                        <img src='/images/Online learning-amico.svg' alt='NWu-logo'></img>
                    </div>
                    
                </Hero>

                <Form onSubmit={executeLogin} method="POST">

                    {error && <Error> {error}</Error>}

                    <StudentNo  placeholder='Student email'
                     type={'text'}
                     onChange={({target}) => setEmail(target.value)} />

                    <StudentNo placeholder='Enter password' 
                    type={'password'}
                    autoComplete ={'off'}
                    onChange={({target}) => setPassword(target.value)} />

                    <div>
                        <p>forgot your NWU password?</p>
                        <Link to={ROUTES.RESET_PWORD}>Reset</Link>
                    </div>
                    <SignInButton disabled={isInvalid}
                    type="submit"
                    >Sign in</SignInButton>
                </Form>

            </Section>
        </Container>

    );
         

}



const Container = styled.div`
    max-width: 100%;
    
    padding: 0px;

`;


const Section = styled.section`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    padding-top: 40px;
    max-width: 1128px;
    margin: auto;
    padding: 18px 10px 18px 18px;
    align-content: start;

    
    @media (max-width: 768px) {
        
        padding-top: 50px;
        margin: 0;
        align-content: center;
        
        
    }

`;

const Hero = styled.div`
    width: 100%;
    

    div{
        /* z-index: -1; */
        position: absolute;
        right: -60px;
        bottom: -30px;

        @media (max-width: 768px ) {
            position: initial;
            display: none;
        }

        
    }

    img{
        width: 640px;
        height: 640px;

        @media (max-width: 1000px ) {
            width: 540px;
            height: 540px;
        }
    }


`;

const SubHeading = styled.p`
    width: 40%;
    margin: 20px 0 0 0;
    font-size: 32px;
    line-height: 44px;
    font-weight: 500;
    margin-top: 20px;
    
    color: #263238;

    @media (max-width: 768px ) {
        width: 100%;
        font-size: 24px;
        line-height: 32px;
    }

`;

const Heading = styled.p`
    width: 40%;
    font-size: 80px;
    line-height: 80px;
    font-weight: 700;
    
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
    margin-top: 20px;
    width:380px;
    padding-right: 10px;


    @media (max-width: 768px ) {
        margin-top: 60px

        
    }
        
    
    div{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        position: relative;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
        

        p{
            color: black;
            font-size: 16px;
            font-weight: 600;
        }

        a{
            color: #6c3d91;
            margin-left: 10px;
            text-decoration: none;
            font-weight: 600;
            
            &:hover{
                text-decoration: underline;
            }

        }
    }


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
    border: none;
    background: #D9D9D9;
    color: black;
    

    &:focus{
        outline: 2px solid #70298D;  

    }
    

    

`;



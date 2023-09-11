import React from 'react';
import styled from 'styled-components'
import {useNavigate } from 'react-router-dom'
import { useContext , useState , useEffect} from 'react';
import FirebaseContext from '../../lib/context/firebaseContext';

export default function Login() {

    // App anvigation
    const navigation = useNavigate();
    
    //calling database context
    const { firebase } = useContext(FirebaseContext);

    //state for storing form inputs
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    //usestate for input errors
    const [error , setError] = useState('');

    // uses state for input validation
    const isInvalid = password === '' || email === '';

    // hande login
    const executeLogin = () => {

    }

    useEffect(() => {
      document.title = 'Login-NWU'
    
      
    }, [])
    


        
    
    return (
        <Container>
            <Nav>
                <img src='/images/NWU-white-logo.png' alt='NWu-logo'></img>

            </Nav>

            <Section>
                <Hero>
                    <Heading> Let's sign you in.</Heading>
                    <SubHeading>Welcome to NWU student registration portal.</SubHeading>
                    <div>
                        <img src='/images/Online learning-amico.svg' alt='NWu-logo'></img>
                    </div>
                    
                </Hero>

                <Form onSubmit={executeLogin} method="POST">
                    <StudentNo  placeholder='Univesrity number or student number'
                     type={'text'}
                     onChange={({target}) => setEmail(target.value)} />

                    <StudentNo placeholder='Enter password' 
                    type={'password'}
                    autoComplete ={'off'}
                    onChange={({target}) => setPassword(target.value)} />

                    <div>
                        <p>forgot your NWU password?</p>
                        <a>Reset</a>
                    </div>
                    <SignInButton disabled={isInvalid}
                    type='submit'
                    >Sign in</SignInButton>
                </Form>

                


            </Section>
        </Container>

    );
         

}

const Container = styled.div`
    
    padding: 0px;

`;

const Nav = styled.nav`
    display: flex;
    align-items: center; 
    justify-content: center;
    background: var(--stroke, #70298D);
    padding: 5px;

    img{
        width: 100px;

        @media (max-width: 768px) {
            padding: 0 5px;
            width: 60px;
            
        }
    }

`;

const Section = styled.section`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    padding-top: 40px;
    max-width: 1128px;
    margin: auto;
    padding: 18px 0px 18px 18px;
    align-content: start;

    
    @media (max-width: 768px) {
        
        padding-top: 50px;
        margin: 0;
        
        
    }

`;

const Hero = styled.div`
    width: 100%;
    

    div{
        /* z-index: -1; */
        position: absolute;
        right: -100px;
        bottom: -2px;

        @media (max-width: 768px ) {
            position: initial;
            display: none;
        }

        
    }

    img{
        width: 670px;
        height: 640px;

        @media (max-width: 768px ) {
            
        }
    }


`;

const SubHeading = styled.p`
    width: 55%;
    margin: 20px 0 0 0;
    font-size: 55px;
    line-height: 55px;
    font-weight: 500;
    margin-top: 50px;
    
    color: #111212;

    @media (max-width: 768px ) {
        width: 100%;
        font-size: 30px;
        line-height: 50px;
    }

`;

const Heading = styled.p`
    width: 55%;
    font-size: 70px;
    line-height: 70px;
    font-weight: 700;
    
    color: black;

    @media (max-width: 768px ) {
        width: 100%;
        font-size: 50px;
        line-height: 45px;
    }

`;

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
    width:408px;
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
        margin-top: 30px;
        

        p{
            color: black;
            font-size: 16px;
        }

        a{
            color: #6c3d91;
            margin-left: 10px;
            font-size: 16px;
        }
    }


`;

const SignInButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 100%;
    color: black;
    border-radius: 10px;
    background: var(--stroke, #70298D);
    transition-duration: 167ms;
    font-size: 20px;
    font-weight: 700;
    box-shadow: none;
    border: 0;

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
    height: 56px;
    width: 95%;
    border-radius: 10px;
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


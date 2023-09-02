import React from 'react';
import styled from 'styled-components'

class Login extends React.Component {

    constructor(props){
        super(props)
        
    }

    render() {
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

                    <Form>
                        <StudentNo placeholder='Univesrity number or student number' type={'text'}/>
                        <StudentNo placeholder='Enter Pin' type={'text'}/>
                        <div>
                            <p>forgot your NWU pin?</p>
                            <a>Reset</a>
                        </div>
                        <SignInButton>Sign in</SignInButton>
                    </Form>

                    


                </Section>
            </Container>
        
            );
         }

}

const Container = styled.div`
    padding: 0px;

`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 0px 0 16px;
    display: flex;
    align-items: center; 

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
    padding: 16px;
    align-content: start;

    
    @media (max-width: 768px) {
        padding: 0 5px;
        padding-top: 50px;
        
        
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
    
    color: #e1e1e1;

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
    
    color: #fff;

    @media (max-width: 768px ) {
        width: 100%;
        font-size: 50px;
        line-height: 45px;
    }

`;

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
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
        margin-top: 50px;
        

        p{
            color: white;
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
    background-color: white;
    height: 56px;
    width: 100%;
    color: black;
    border-radius: 20px;
    transition-duration: 167ms;
    font-size: 20px;
    font-weight: 700;
    box-shadow: none;
    border: 0;

    &:hover{
        background-color: #c1c1c1;
    }
    


`;

const StudentNo = styled.input`
    display: flex;
    justify-content: start;
    text-align: start;
    padding-left:20px;
    height: 56px;
    width: 100%;
    border-radius: 20px;
    transition-duration: 167ms;
    font-size: 16px;
    margin-bottom: 30px;
    font-weight: 200;
    box-shadow: inset 0 0 0 1.5px #39383e;
    border: none;
    background: none;
    color: white;
    

    

`;

export default Login;

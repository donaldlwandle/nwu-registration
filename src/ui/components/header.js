import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {useNavigate , useLocation} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

import * as ROUTES from '../../utils/constants/routes'
import { UseStateValue } from '../../lib/context/stateProvider';
import { getUserDataById } from '../../backend/database/database-querry';

export default function Header(){
    

    const location = useLocation();
    const [{list, firebaseApp , user}] = UseStateValue();


    const executeSignOut =(event) =>{
        
        
        signOut(getAuth(firebaseApp)).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });;
        
    }

    return(
        <Nav>
            <div>

            </div>
            <img src='/images/nwu_logo.png' alt='NWU-logo'></img>

            <Options>
                {location.pathname === ROUTES.SELECT ? (
                    <Link to={ROUTES.CHECKOUT}>
                        <Checkout>
                            <ShoppingBagIcon/>
                            <span>{list?.length}</span>
                        </Checkout>

                    </Link>

                ) : <div/>}


                {user? (
                    <SignOut onClick={executeSignOut}>Sign Out</SignOut>

                ) : <div/>}

                


            </Options>
            

        </Nav>
    )
}

const Nav = styled.nav`
    max-width: 100%;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    background: var(--stroke, #70298D);
    padding: 15px;
    position: sticky;
    top: 0;
    z-index: 100;

    

    img{
        width: 120px;

        @media (max-width: 768px) {
            
            width: 70px;
            
        }
    }
    

`;

const Checkout= styled.div`
    display: flex;
    padding-right: 7px;

`;

const Options= styled.div`
    display: flex;
    align-items: center;

    a{
        text-decoration: none;
        color: white;
    }

    span{
        margin: 0 5px;
    }

`;

const SignOut = styled.button`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: var(--stroke, #70298D);
    border-radius: 5px;
    background: white;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight:600;
    padding: 7px;
    box-shadow: none;
    border: 0;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }
    @media (max-width: 768px) {
            
        font-size: 12px;
        padding: 5px;
    }
    


`;
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {useNavigate , useLocation} from 'react-router-dom'

import * as ROUTES from '../../utils/constants/routes'

export default function Header({}){

    const location = useLocation();

    return(
        <Nav>
            <div>

            </div>
            <img src='/images/nwu_logo.png' alt='NWU-logo'></img>

            <Options>
                {location === ROUTES.SELECT ? (
                    <Link to={ROUTES.CHECKOUT}>
                        <Checkout>
                            <ShoppingBagIcon/>
                            <span>0</span>
                        </Checkout>

                    </Link>

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
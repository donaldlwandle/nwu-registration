
import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import * as ROUTES from './utils/constants/routes'
import React ,{ lazy, Suspense, useEffect, useState } from 'react';
import { firebaseApp } from './backend/database/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UseStateValue } from './lib/context/stateProvider';
import ProtectedRoute from './utils/protected-route';
import IsUserLoggedIn from './utils/is-logged-in';

const Login = lazy(()=> import('./ui/pages/login'));
const ResetPassword = lazy(()=> import('./ui/pages/reset-password'));
const DashBoard = lazy(()=> import('./ui/pages/dashbord'));
const Select= lazy(()=> import('./ui/pages/select'));
const Checkout = lazy(()=> import('./ui/pages/checkout'));

function App() {
  
  const [{list},dispatch ,user] = UseStateValue();
  const [authUser, setauthUser] = useState(null);

  console.log("THE AUTH USER IS >>>> ", authUser);

  useEffect(() => {

    onAuthStateChanged(getAuth(firebaseApp),(authUser) =>{

      
      if (authUser) {
          //we have a user therefore we can store the user in LS
          setauthUser(authUser);
          dispatch({
            type:'SET_USER',
            user:authUser
          });



      } else {
          //we don't have a user therefore clear out the LS
          setauthUser(null);
          dispatch({
            type:'SET_USER',
            user:null
          });

          
      }


    });

    
  
    
  }, []);

  


  return (
    <div className="App">
      <Router>
        <Suspense fallback ={<p color='white'>Loading...</p>}>
          <Routes>
            <Route exact element={<IsUserLoggedIn user={authUser} Component= {Login} />} path = {ROUTES.LOGIN} />

            <Route exact element={<IsUserLoggedIn user={authUser} Component= {ResetPassword} />} path = {ROUTES.RESET_PWORD}  />

            <Route exact element={<ProtectedRoute user={authUser} Component={DashBoard}/>} path = {ROUTES.DASHBOARD}  />


            <Route exact element={<ProtectedRoute user={authUser} Component={Select}/>} path = {ROUTES.SELECT}  />

          
            
            <Route exact element={<ProtectedRoute user={authUser} Component={Checkout}/>} path = {ROUTES.CHECKOUT} />
              
            
              
          </Routes>
 
        </Suspense>
        
      </Router>
    </div>
  );
}

export default App;

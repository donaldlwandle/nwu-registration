
import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import * as ROUTES from './utils/constants/routes'
import React ,{ lazy, Suspense } from 'react';

const Login = lazy(()=> import('./ui/pages/login'));
const ResetPassword = lazy(()=> import('./ui/pages/reset-password'));
const DashBoard = lazy(()=> import('./ui/pages/dashbord'));
const Select= lazy(()=> import('./ui/pages/select'));
const Checkout = lazy(()=> import('./ui/pages/checkout'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback ={<p color='white'>Loading...</p>}>
          <Routes>
            <Route exact path = {ROUTES.LOGIN} Component= {Login} />
            <Route exact path = {ROUTES.RESET_PWORD} Component= {ResetPassword} />
            <Route exact path = {ROUTES.DASHBOARD} Component = {DashBoard}/>
            <Route exact path = {ROUTES.SELECT} Component = {Select}/>
            <Route exact path = {ROUTES.CHECKOUT} Component = {Checkout}/>
              
          </Routes>
 
        </Suspense>
        
      </Router>
    </div>
  );
}

export default App;

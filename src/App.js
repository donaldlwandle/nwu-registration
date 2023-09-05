
import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import * as ROUTES from './utils/constants/routes'
import React ,{ lazy, Suspense } from 'react';

const Login = lazy(()=> import('./ui/components/login'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback ={<p color='white'>Loading...</p>}>
          <Routes>
            <Route exact path = {ROUTES.LOGIN} Component= {Login} />
              
          </Routes>

        </Suspense>
        
      </Router>
    </div>
  );
}

export default App;

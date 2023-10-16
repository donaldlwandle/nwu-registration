import {  Navigate} from 'react-router-dom'
import * as ROUTES from './constants/routes'


export default function ProtectedRoute({user , Component}){

    return user ? <Component/> : <Navigate to={ROUTES.LOGIN} />
    

};


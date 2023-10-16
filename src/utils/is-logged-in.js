import {  Navigate} from 'react-router-dom'
import * as ROUTES from './constants/routes'


export default function IsUserLoggedIn({user , Component }){

    return user ?  <Navigate to={ROUTES.DASHBOARD}/> : <Component/>
    

};
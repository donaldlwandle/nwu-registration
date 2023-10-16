import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthListener(firebase){

    const [user, setUser] = useState(localStorage.getItem('authUser'));

    useEffect(() => {
      const listener = onAuthStateChanged(getAuth(firebase),(authUser) =>{

        
        if (authUser) {
            //we have a user therefore we can store the user in LS
            
            localStorage.setItem('authUser', JSON.stringify);
            setUser(authUser);
        } else {
            //we don't have a user therefore clear out the LS
            localStorage.removeItem('authUser');
            setUser(null);
            
        }


      });

      return ()=> listener();
    
      
    }, [firebase]);
    

    return { user};
}
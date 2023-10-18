import { useEffect, useState } from "react";
import { getUserDataById } from "../../backend/database/database-querry";
import { UseStateValue } from "../context/stateProvider";

export default function  useUserData(userId){
    const [dispatch ] = UseStateValue();
    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
      async function getUserObject(userId){
        const response = await getUserDataById(userId);
        setActiveUser(response);

        dispatch({
          type:'SET_USER_DATA',
          userData:response
        });


    }

    if(userId){
      getUserObject();
    }
    
      
    }, [userId])

    return {user:activeUser}
    
}
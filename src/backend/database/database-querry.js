import { UseStateValue } from "../../lib/context/stateProvider";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

const getUserDataById = async(userId)=>{
    const [{firebaseApp}] = UseStateValue();

    const q = query(collection(getFirestore(firebaseApp), "students"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    const userData = querySnapshot.docs.map((item)=>({
        ...item.data(),
        docId:item.id

    }));

    

    

    return userData;
}

export  {getUserDataById};
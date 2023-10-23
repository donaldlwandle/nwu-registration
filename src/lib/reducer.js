import { firebaseApp } from "../backend/database/firebase";


export const InitialState = {
    list: [],
    modules:[],
    user:null,
    userData:null,
    accountData:null,
    firebaseApp:firebaseApp,
    sponsor:'nsfas',
    total:null
}

const Reducer =(state,action)=>{
    
    
 
    switch (action.type){
        case 'SET_TOTAL':
            return{
                //set login user
                ...state,
                total:action.total
            }
        case 'SET_SPONSOR':
            return{
                //set login user
                ...state,
                sponsor:action.sponsor
            }

        case 'SET_USER_ACCOUNT_DATA':
            return{
                //set login user
                ...state,
                accountData:action.accountData
            }

        case 'SET_MODULES':
            return{
                //set login user
                ...state,
                modules:action.modules
            }

        case 'SET_USER_DATA':
            return{
                //set login user
                ...state,
                userData:action.userData
            }

        case 'SET_USER':
            return{
                //set login user
                ...state,
                user:action.user
            }

        case 'ADD_TO_LIST':
            // Add item to list
            return {
                ...state,
                 list:[...state.list , action.item]
            };

        case 'REMOVE_FROM_LIST' :
            const index = state.list.findIndex(
                (listItem) => listItem.id === action.id

            );

            let newList = [...state.list];
            
            if(index >= 0){
                newList.splice(index,1);

            }else{
                console.warn(
                    ` Can't remove module {id: ${action.id}} 
                    as it's not in the basket!`
                );
            }

            return {
                ...state,
                list:newList
            } 


        default:
            return state;
    }

}

export default Reducer;
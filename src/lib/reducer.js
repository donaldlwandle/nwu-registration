import { firebaseApp } from "../backend/database/firebase";


export const InitialState = {
    list: [],
    user:null,
    firebaseApp:firebaseApp
}

const Reducer =(state,action)=>{
    
    console.log(action);
 
    switch (action.type){

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
import React ,{createContext,useContext, useReducer } from "react";

// prepares the data layer
export const StateContext = createContext();

//this will wrap the entire app and provide the dataLayer to every component on any app level
export const StateProvider = ({reducer , initialState , children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how you pull information from the dataLayer
export const UseStateValue = () => useContext(StateContext); 
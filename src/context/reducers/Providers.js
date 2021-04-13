import React, { createContext, useReducer } from 'react';
import authInitialState from '../initialStates/authInitialState';
import contactInitialState from '../initialStates/contactInitialState';
import auth from './auth';
import contacts from './contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactState, contactDispatch] = useReducer(contacts, contactInitialState);

    return (
        <GlobalContext.Provider value={{authState, authDispatch, contactState, contactDispatch}}> 
            {children} 
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;
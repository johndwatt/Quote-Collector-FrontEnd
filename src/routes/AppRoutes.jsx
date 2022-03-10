import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../components/HomeComps/Home';
import Signup from '../components/AuthComps/Signup';
import Login from '../components/AuthComps/Login';

import QuoteContainer from '../components/QuoteComps/QuoteContainer';
import NewQuote from '../components/QuoteComps/NewQuote';
import EditQuote from "../components/QuoteComps/EditQuote";
import DeleteQuote from "../components/QuoteComps/DeleteQuote";

function AppRoutes(props) {
    const currentUser = props.user;

    //NEW ISSUE: i need to redirect to login when a wrong route is hit rather than just leave them on a blank page - COULD CREATE COMPONENTS TO USE IF THEY ARE ALREADY LOGGED IN TO RENDER THOSE INSTEAD, Also ERROR HANDLING ON THOSE PAGES
    return (
        <Routes>            
            {currentUser ? (
                <>
                    <Route exact path='/'  element={<Home />} /> 
                    <Route exact path='/quotes' element={<QuoteContainer />}/>
                    <Route exact path='/quotes/new' element={<NewQuote />}/>
                    <Route path='/quotes/:id/edit' element={<EditQuote />}/>
                    <Route path='/quotes/:id/delete' element={<DeleteQuote />}/>
                </>
            ) : (
                <>
                    <Route exact path='/'  element={<Home />} /> 
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/login' element={<Login />} />                
                </>
            )}

           
            
        </Routes>            
    );
}

export default AppRoutes;
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
    //NEW ISSUE: Need to create some sort of auth required thing that blocks these routes when not logged in

    return (
        <Routes>            
            <Route exact path='/'  element={<Home />} />
            <Route exact path='/quotes' element={<QuoteContainer />}/>
            <Route exact path='/quotes/new' element={<NewQuote />}/>
            <Route path='/quotes/:id/edit' element={<EditQuote />}/>
            <Route path='/quotes/:id/delete' element={<DeleteQuote />}/>
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
        </Routes>            
    );
}

export default AppRoutes;
import React from 'react';
import { Routes, Route } from "react-router-dom";

// import { useRecoilValue } from "recoil";
// import { authState } from "../recoil/selectors";

import Home from '../components/HomeComps/Home';
import Signup from '../components/AuthComps/Signup';
import Login from '../components/AuthComps/Login';

import QuoteContainer from '../components/QuoteComps/QuoteContainer';
import NewQuote from '../components/QuoteComps/NewQuote';
import EditQuote from "../components/QuoteComps/EditQuote";
import DeleteQuote from "../components/QuoteComps/DeleteQuote";

function AppRoutes(props) {
    // const isAuthenticated = useRecoilValue(authState);

    // ISSUE: redirect is deprecated, try to think of new way to handle authrequired for app routes
    // consider complete front end auth overhaul - LOOK INTO THIS
    return (
        <Routes>
            {/* <Route path='/' exact element={} /> */}
            <Route exact path='/'  element={<Home />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/quotes' element={<QuoteContainer />}/>
            <Route exact path='/quotes/new' element={<NewQuote />}/>
            <Route path='/quotes/:id/edit' element={<EditQuote />}/>
            <Route path='/quotes/:id/delete' element={<DeleteQuote />}/>
        </Routes>

    );
}

export default AppRoutes;
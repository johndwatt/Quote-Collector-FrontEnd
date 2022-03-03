import React from 'react';
import { Routes, Route, Redirect } from "react-router-dom";

import Home from '../components/HomeComps/Home'
import QuoteContainer from '../components/QuoteComps/QuoteContainer';
import NewQuote from '../components/QuoteComps/NewQuote';
import EditQuote from "../components/QuoteComps/EditQuote";
import DeleteQuote from "../components/QuoteComps/DeleteQuote";

function AppRoutes(props) {
    return (
        <Routes>
            {/* <Route path='/' exact element={} /> */}
            <Route exact path='/'  element={<Home />} />
            <Route exact path='/quotes' element={<QuoteContainer />}/>
            <Route exact path='/quotes/new' element={<NewQuote />}/>
            <Route path='/quotes/:id/edit' element={<EditQuote />}/>
            <Route path='/quotes/:id/delete' element={<DeleteQuote />}/>
        </Routes>

    );
}

export default AppRoutes;
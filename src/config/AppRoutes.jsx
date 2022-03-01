import React from 'react';
import { Routes, Route, Redirect } from "react-router-dom";

import QuoteContainer from '../components/QuoteContainer/QuoteContainer';
import NewQuote from '../components/NewQuote/NewQuote';
import EditQuote from "../components/EditQuote/EditQuote";

function AppRoutes(props) {
    return (
        <Routes>
            {/* <Route path='/' exact element={} /> */}
            <Route path='/quotes' exact element={<QuoteContainer />}/>
            <Route path='/quotes/new' exact element={<NewQuote />}/>
            {/* <Route /><EditQuote /> */}
        </Routes>

    );
}

export default AppRoutes;
import React, { useState, useEffect } from 'react';
import auth_service from './auth/auth_service';

import Navbar from "./components/NavComps/Navbar";
import Footer from "./components/NavComps/Footer";
import AppRoutes from './routes/AppRoutes'

import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //need this to set recoil state for current user, add recoil back in instead of normal state
    //login needs to reload the navbar so that it rerenders the user changes everything
    const user = auth_service.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, [])

  return (
    <div className="App">
      <Navbar user={currentUser} />
      <AppRoutes user={currentUser} />
      <Footer />
    </div>
  );
}

export default App;

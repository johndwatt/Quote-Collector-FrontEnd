import React from 'react';

import { useRecoilValue } from 'recoil';
import { authState } from './recoil/selectors';

import Navbar from "./components/NavComps/Navbar";
import Footer from "./components/NavComps/Footer";
import AppRoutes from './routes/AppRoutes'

import './App.css';

function App() {
  const currentUser = useRecoilValue(authState);

  return (
    <div className="App">
      <Navbar user={currentUser} />
      <AppRoutes user={currentUser} />
      <Footer />
    </div>
  );
}

export default App;

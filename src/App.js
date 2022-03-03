import React from 'react';

import Navbar from "./components/NavComps/Navbar";
import Footer from "./components/NavComps/Footer";
import AppRoutes from './routes/AppRoutes'

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

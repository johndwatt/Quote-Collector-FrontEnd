import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from './routes/AppRoutes'

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;

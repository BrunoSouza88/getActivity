import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Activity from './components/Activity';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/activity" element={ <Activity /> } />
      </Routes>
    </div>
  );
}

export default App;

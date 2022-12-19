import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';
import './App.css';

const App = () => (
  <div className="container">
    <Link to="/greeting">Get random greeting</Link>
    <Routes>
      <Route path="/greeting" element={<Greetings />} />
    </Routes>
  </div>
);

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Menu' exact element={<Menu />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

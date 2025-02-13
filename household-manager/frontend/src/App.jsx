import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importiere die Seitenkomponenten
import Home from './pages/Home'; // Sicherstellen, dass dieser Import nur einmal vorkommt
import Dashboard from './pages/Dashboard'; // Ebenso für Dashboard

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

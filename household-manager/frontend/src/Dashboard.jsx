// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import './Dashboard.css';


function Dashboard() {
  const [items, setItems] = useState([]);
  const [history, setHistory] = useState([]);
  
  // Beispiel-Daten (kann später durch eine API oder Datenbank ersetzt werden)
  const sampleItems = [
    { name: 'Molkerei-Produkte', quantity: 5 },
    { name: 'Küchenutensilien', quantity: 3 },
    { name: 'Reinigungsmittel', quantity: 2 },
  ];

  const sampleHistory = [
    { action: 'Molkerei-Produkte hinzugefügt', date: '2025-02-12' },
    { action: 'Küchenutensilien hinzugefügt', date: '2025-02-10' },
  ];

  useEffect(() => {
    // Hier könnte ein API-Aufruf zur Datenabfrage stehen
    setItems(sampleItems);
    setHistory(sampleHistory);
  }, []);

  return (
    <div className="dashboard">
      <h2>Haushaltsmanagement Dashboard</h2>
      
      {/* Bestandsübersicht */}
      <div className="items">
        <h3>Bestandsübersicht</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name}: {item.quantity} Stück
            </li>
          ))}
        </ul>
      </div>
      
      {/* Verlauf der Einkäufe */}
      <div className="history">
        <h3>Einkaufsverlauf</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.action} am {entry.date}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Sprachsteuerung Button (Platzhalter) */}
      <div className="voice-control">
        <button>Sprachsteuerung aktivieren</button>
      </div>
    </div>
  );
}

export default Dashboard;

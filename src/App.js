import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import OwnerPicker from "./components/OwnerPicker/OwnerPicker";

function App() {
  return (
    <div className="App">
        <Navigation />
        <OwnerPicker />
    </div>
  );
}

export default App;

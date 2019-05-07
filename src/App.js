import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeList from './components/PokeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokeList />
      </header>
    </div>
  );
}

export default App;

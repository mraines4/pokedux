import React from 'react';
import logo from './logo.svg';
import './App.css';
// import PokeList from './components/PokeList';
import SmartPokeList from './containers/PokeListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>GOTTA CATCH EM ALL</h1>
        <SmartPokeList />
      </header>
    </div>
  );
}

export default App;

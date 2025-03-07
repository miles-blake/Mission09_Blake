import React from 'react';
import Header from './components/Header';
import TeamList from './components/TeamList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TeamList />
      </main>
    </div>
  );
}

export default App;

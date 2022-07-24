import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1 className="headingStyle">Todo App</h1>
       <Card />
    </div>
  );
}

export default App;

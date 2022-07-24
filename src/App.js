import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1 className="headingStyle">Todo App</h1>
       {/* <Card /> */}
       <Card todoTitle="First Title" todoDescription="Bangladesh is our homeland.In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 " todoFooter="first Footer" />
       <Card todoTitle="PHP" todoDescription="php is programming languageIn simple words, it can convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 " todoFooter="php Footer" />
       <Card todoTitle="Laravel" todoDescription="laravel is php most popular framework.In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 " todoFooter="laravel Footer" />
       <Card todoTitle="React" todoDescription="React.js is javascript library.In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 " todoFooter="react Footer" />
       <Card todoTitle="Angular" todoDescription="Angular.js is javascript library.In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 " todoFooter="angular Footer" />
       <Card todoTitle="Vue" todoDescription="Vue.js is javascript library.In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 " todoFooter="vue Footer" />
       {/* <Card /> */}
    </div>
  );
}

export default App;

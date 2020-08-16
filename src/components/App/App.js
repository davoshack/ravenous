import React from '../../../node_modules/react';
import logo from '../../logo.svg';
import '../BusinessList/BusinessList';
import '../SearchBar/SearchBar';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;

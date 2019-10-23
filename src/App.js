import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ProductList from 'UI/ProductList'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ProductList />
      </header>
    </div>
  );
}

export default App;

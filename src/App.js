import React from 'react';
import logo from './logo.svg';
import './App.css';

import Inicio from './Home/Inicio'
import Categorias from './Jogo/Categorias';

function App() {
  return (
    <div className="App">
      <Inicio />
      <Categorias />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Inicio from './Home/Inicio'
import Categorias from './Jogo/Categorias';
import Perguntas from './Jogo/Perguntas';
import Resultado from './Jogo/Resutado'

function App() {
  return (
    <div className="App">
      <Inicio />
      <Resultado />
    </div>
  );
}

export default App;

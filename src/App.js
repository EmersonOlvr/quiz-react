import React from 'react';
import logo from './logo.svg';
import './App.css';

import Inicio from './Home/Inicio'
import Categorias from './Jogo/Categorias';
import Perguntas from './Jogo/Perguntas';
import Resultado from './Jogo/Resultado';
import Ranking from './Jogo/Ranking';

function App() {
  return (
    <div className="App">
      <Inicio />
      <Ranking />
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import Categoria from './Categoria';

class Categorias extends Component {
    render() {
        return (
            <div>
                <h1>Lista de Categorias</h1>
                <p>Selecione a categoria que você quer responder perguntas</p>

                <Grid columns={5} divided>
                    <Categoria titulo='Futebol' icone='futbol outline'/>
                    <Categoria titulo='Fórmula 1' icone='trophy'/>
                    <Categoria titulo='Música' icone='music' />
                    <Categoria titulo='Mundo' icone='globe'/>
                    <Categoria titulo='Animais' icone='paw'/>
                    <Categoria titulo='Brincadeira' icone='puzzle place' />
                    <Categoria titulo='Profissões' icone='user md'/>
                </Grid>
            </div>
        )
    }
}

export default Categorias
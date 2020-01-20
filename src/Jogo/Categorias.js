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
                    <Categoria />
                </Grid>
            </div>
        )
    }
}

export default Categorias
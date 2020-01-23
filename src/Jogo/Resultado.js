import React, {Component} from 'react';
import {List, Label} from 'semantic-ui-react';

import Navegacao from './Navegacao';

class Resultado extends Component {
    render() {
        return (
            <div>
                <Navegacao />
                <h2>Seus resultados</h2>
                {JSON.stringify(this.props.location.state)}
                <p>Confira o seu desempenho nesta categoria</p>

                <List divided>
                    <List.Item>
                        <List.Content floated='left'>
                            <Label>1</Label>
                            Pergunta sobre bla bla
                        </List.Content>

                        <List.Content floated='right'>3</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            <Label>2</Label>
                            Pergunta sobre bla bla
                        </List.Content>

                        <List.Content floated='right'>1</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='left'>
                            <Label>3</Label>
                            Pergunta sobre bla bla
                        </List.Content>

                        <List.Content floated='right'>2</List.Content>
                    </List.Item>
                </List>
            </div>
        )
    }
}

export default Resultado
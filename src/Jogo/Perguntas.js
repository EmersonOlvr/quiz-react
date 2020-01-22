import React, { Component } from 'react';
import { Grid, Radio, Button, Divider, Message } from 'semantic-ui-react';

import Navegacao from './Navegacao';
import Axios from 'axios';

class Perguntas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            perguntas: {},
            estaCarregando: false
        }
    }

    componentDidMount() {
        this.carregaPerguntas(this.props.match.params.nome)
    }

    carregaPerguntas(cat) {
        console.log('categoria da pergunta: ' + cat)
        this.setState({
            estaCarregando: true,
            perguntas: {}
        })
        const url = `https://quiz-react-udemy.firebaseio.com/categorias.json?orderBy="nome"&equalTo=${cat}`
        Axios
            .get(url)
            .then(dados => {
                console.log(dados)
            })
            .catch(err => {
                console.log('Algum problema ocorreu')
            })
    }

    render() {
        return (
            <div>
                <Navegacao />
                <h2>{this.props.match.params.nome}</h2>
                <p>Mostre que você sabe tudo sobre este assunto</p>

                <h3>PERGUNTA: Qual a profissão bla bla bla</h3>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='yellow'>
                                <p>Alternativa 1</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='teal'>
                                <p>Alternativa 2</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='pink'>
                                <p>Alternativa 3</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='brown'>
                                <p>Alternativa 4</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Button>Finalizar</Button>
            </div>
        )
    }
}

export default Perguntas
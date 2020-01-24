import React, { Component } from 'react';
import { Segment, Header, Card, Button, Container } from 'semantic-ui-react';

import { auth, providers } from '../config';
import Navegacao from './Navegacao';
import { Redirect } from 'react-router-dom';

class Inicio extends Component {
    constructor(props) {
        // console.log('Inicio.js: constructor()')
        super(props)

        this.state = {
            usuario: {},
            estaLogado: false
        }

        auth.onAuthStateChanged((usuario) => {
            if (usuario) {
                // console.log('Inicio.js: usuario (onAuthStateChanged()):')
                console.log(usuario)
                this.setState({
                    usuario,
                    estaLogado: true
                })
                console.log('Inicio.js: Logou')
            } else {
                this.setState({ estaLogado: false })
                console.log('Inicio.js: Não logou')
            }
        })
    }

    autentica(provider) {
        // console.log('Inicio.js: autentica()')
        auth.signInWithPopup(providers[provider])
    }

    render() {
        // console.log('Inicio.js: render()')
        if (this.state.estaLogado) {
            return <Redirect to='/categorias' />
        }
        return (
            <div>
                <Navegacao />
                <Container>
                    <Segment piled>
                        Quiz
                    </Segment>
                    <Header as='h2'>
                        Jogo de Perguntas e Respostas
                    </Header>
                    <p>
                        Desafie os seus amigos neste incrível jogo de perguntas e respostas. Basta acessar com sua conta do Facebook.
                    </p>
                    {
                        !this.state.estaLogado &&
                        <Card fluid>
                            <Card.Content>
                                Acesse agora mesmo
                            </Card.Content>
                            <Card.Content>
                                <Button color='facebook' onClick={() => this.autentica('facebook')}>Login com Facebook</Button>
                                <Button color='twitter' onClick={() => this.autentica('twitter')}>Login com Twitter</Button>
                                <Button color='red' onClick={() => this.autentica('google')}>Login com Google</Button>
                                <Button basic color='blue'>Usuário Administrativo</Button>
                            </Card.Content>
                        </Card>
                    }
                    {
                        this.state.estaLogado &&
                        <div>
                            <h3>{this.state.usuario.displayName}</h3>
                            <img src={this.state.usuario.photoURL} />
                        </div>
                    }
                </Container>
            </div>
        )
    }
}

export default Inicio
import React, { Component } from 'react';

import { Card, Container, Form, Text, Input, Button } from './styles';
// import Container from './styles';

export default class login extends Component {
  render() {
    return (
        <Container>
            <Card>
                <Form>
                    <Text fontSize='22'>Login</Text><br></br>
                    <Input type='text' placeholder='Usuário' /><br></br>
                    <Input type='password' placeholder='Senha' /><br></br>
                    <Button type='submit' value='Entrar' />
                </Form>
            </Card>
        </Container>
        
    ); 
  }
}





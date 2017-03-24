import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import TodoInput from '../TodoInput'
import logo from './assets/logo.svg'
import TodoList from '../TodoList'
import TodoFilter from '../TodoFilter'
import './style.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React TodoApp</h2>
    </div>
    <Container className="App-intro">
      <Row>
        <Col><TodoInput /></Col>
        <Col className="text-right"><TodoFilter /></Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col><TodoList /></Col>
      </Row>
    </Container>
  </div>
)

export default App

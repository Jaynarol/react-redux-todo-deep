import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, InputGroup, InputGroupAddon, InputGroupButton } from 'reactstrap'

const TodoInput = ({ addTodo, handleSubmit, reset }) => {
  const handleForm = value => {
    if (value.todoText) {
      addTodo(value.todoText)
      reset()
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <InputGroup>
        <InputGroupAddon>&#9829;</InputGroupAddon>
        <Field name="todoText" component="Input" type="text" placeholder=" something need todo" />
        <InputGroupButton color="info" >Add My Todo</InputGroupButton>
      </InputGroup>
    </Form>
  )
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'todoInput'
})(TodoInput)
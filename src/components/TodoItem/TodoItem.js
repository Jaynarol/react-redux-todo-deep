import React, { PropTypes } from 'react'
import { Button, ListGroupItem } from 'reactstrap'

const TodoItem = ({ id, text, finish, removeTodo, toggleTodo }) => {
  const style = finish ?
  {
    color: 'success',
    stike: { textDecoration: 'line-through' },
    icon: String.fromCharCode(9745)
  } : {
    color: '',
    stike: {},
    icon: String.fromCharCode(9744)
  }

  return (
    <ListGroupItem tag="a" href="#" className="justify-content-between" color={style.color} onClick={() => toggleTodo(id)} >
      <div>{style.icon} <span style={style.stike} >{text}</span></div>
      <Button color="danger" onClick={() => removeTodo(id)} >X</Button>
    </ListGroupItem >
  )
}


TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  finish: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoItem
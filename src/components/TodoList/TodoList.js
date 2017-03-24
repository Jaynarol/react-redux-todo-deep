import React, { PropTypes } from 'react'
import { ListGroup } from 'reactstrap'
import TodoItem from '../TodoItem'

const TodoList = ({ todos, filter }) => (
  <ListGroup>
    {
      todos
        .filter(todo => (todo.finish && filter.finish) || (!todo.finish && filter.unfinish))
        .map(todo => <TodoItem key={todo.id} {...todo} />)
    }
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      finish: PropTypes.bool.isRequired
    })
  ).isRequired,
  filter: PropTypes.shape({
    finish: PropTypes.bool.isRequired,
    unfinish: PropTypes.bool.isRequired
  }).isRequired
}

export default TodoList
import React, { PropTypes } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

const TodoFilter = ({ finish, unfinish, filterTodo }) => (
  <ButtonGroup>
    <Button color={finish && unfinish ? 'info' : ''} onClick={() => filterTodo(true, true)} >All</Button>{' '}
    <Button color={finish && !unfinish ? 'info' : ''} onClick={() => filterTodo(true, false)} >Finished</Button>{' '}
    <Button color={!finish && unfinish ? 'info' : ''} onClick={() => filterTodo(false, true)} >UnFinish</Button>
  </ButtonGroup>
)

TodoFilter.propTypes = {
  finish: PropTypes.bool.isRequired,
  unfinish: PropTypes.bool.isRequired,
  filterTodo: PropTypes.func.isRequired
}

export default TodoFilter
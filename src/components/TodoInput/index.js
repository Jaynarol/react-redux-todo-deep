import { connect } from 'react-redux'
import { addTodo } from '../../actions/todos'
import TodoInput from './TodoInput'

const mapDispatchToProps = { addTodo }

export default connect(null, mapDispatchToProps)(TodoInput)
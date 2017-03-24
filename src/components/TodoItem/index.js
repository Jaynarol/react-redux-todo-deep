import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { removeTodo, toggleTodo } from '../../actions/todos'

const mapStateToProps = (state, props) => ({ ...props })
const mapDispatchToProps = { removeTodo, toggleTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
import { connect } from 'react-redux'
import TodoFilter from './TodoFilter'
import { filterTodo } from '../../actions/filter'

const mapStateToProps = state => ({ ...state.filter })
const mapDispatchToProps = { filterTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
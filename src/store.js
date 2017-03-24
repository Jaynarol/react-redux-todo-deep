import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import todos from './reducers/todos'
import filter from './reducers/filter'

export const initialStore = {
  filter: {
    finish: true,
    unfinish: true
  },
  todos: [
    {
      id: 1,
      text: 'test1',
      finish: false
    },
    {
      id: 2,
      text: 'test2',
      finish: true
    }
  ]
}

const rootReducer = combineReducers({
  filter,
  todos,
  form
})

export default rootReducer
import TYPE from './types'

export const filterTodo = (finish, unfinish) => ({
  type: TYPE.FILTER.TODO,
  payload: { finish, unfinish }
})
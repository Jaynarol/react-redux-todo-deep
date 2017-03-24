import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (filter = initialStore.filter, action) => {
  switch (action.type) {
    case TYPE.FILTER.TODO: {
      return {
        finish: action.payload.finish,
        unfinish: action.payload.unfinish
      }
    }
    default: {
      return filter
    }
  }
}
import { CHANGE_SELECTED_PAGE, INIT_UNIVERSITIES } from './types'

export function rootReducer(state, action) {
  switch (action.type) {
    case INIT_UNIVERSITIES:
      return Object.assign({}, state, {
        universities: [ ...action.payload.universities ]
      })
    case CHANGE_SELECTED_PAGE:
      return Object.assign({}, state, {
        page: Number(action.payload.page)
      })
    default:
      return state
  }
}
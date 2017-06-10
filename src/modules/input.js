export const CHANGE_INPUT = 'CHANGE_INPUT'

const initialInput = localStorage.getItem('input') ? localStorage.getItem('input') : '';

const initialState = {
  htmlMode: 'raw',
  input:initialInput
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      }
    default:
      return state
  }
}

export const changeInput = (text) => {
  return dispatch =>
    dispatch({
      input: text,
      type: CHANGE_INPUT
    })
}

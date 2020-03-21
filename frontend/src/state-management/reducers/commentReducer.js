export default function commentReducer(state, action) {
  switch(action.type) {
    case 'NEW_COMMENT':
      console.log('DISPATCHING')
      state.comments = [...state.comments, action.comment]

      return {...state}
    case 'GET_COMMENTS':
      state.comments = action.comments

      return {...state}
    default:

      return {...state}
  }
}

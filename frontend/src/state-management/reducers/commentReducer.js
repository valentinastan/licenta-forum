export default function commentReducer(state, action) {
  switch(action.type) {
    case 'NEW_COMMENT':
      state.comments.push(action.comment)

      return {...state}
    case 'GET_COMMENTS':
      state.comments = action.comments

      return {...state}
    default:

      return {...state}
  }
}
export default function postReducer(state, action) {
  switch(action.type) {
    case "GET_POSTS":
      state.posts = action.posts

      return {...state}
    default:

      return {...state}
  }
}
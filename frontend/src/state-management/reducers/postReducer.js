export default function postReducer(state, action) {
  switch(action.type) {
    case 'GET_POSTS':
      state.posts = action.posts

      return {...state}
    case 'NEW_POST':
      state.posts.push(action.post)
      console.log('state din reducer: ', state)
      return {...state}
    default:

      return {...state}
  }
}
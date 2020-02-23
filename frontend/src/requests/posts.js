import { get, post } from './request'

export async function getPostsRequest() {
  let posts = await get('api/posts')

  return posts.data
}

export async function postPostRequest(params) {
  let newPost = await post('api/post', params)

  return newPost.data
}
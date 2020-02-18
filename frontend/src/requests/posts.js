import { get } from './request'

export async function getPostsRequest() {
  let posts = await get('api/posts')

  return posts.data
}
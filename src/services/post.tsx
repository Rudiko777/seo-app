const API_URL: string = 'https://jsonplaceholder.typicode.com'

export interface Post{
    userId: number
    id: number
    title: string
    body: string
}

export async function getAllPosts(): Promise<Post[]>{
    const response = await fetch(`${API_URL}/posts`, {cache: 'force-cache'})
    return await response.json()
}

export async function getOnePost(id: number): Promise<Post>{
    const response = await fetch(`${API_URL}/posts/${id}`)
    return response.json()
}

export interface PostFastAPI{
    title: string
    content: string
}

// export async function getPostsFastApi(): Promise<PostFastAPI[]>{
//     const response = await fetch("http://localhost:8000/posts/")
//     return await response.json()
// }
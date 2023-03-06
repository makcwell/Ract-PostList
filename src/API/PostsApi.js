let BASE_URL = 'https://api.react-learning.ru';
let token = localStorage.getItem('token')


export  async function getAllPosts() {
    let response = await fetch(`${BASE_URL}/v2/group-10/posts`, {
        headers: {
            authorization: `Bearer ${token}`
        },
    })
    let posts = await response.json()

    return posts
}


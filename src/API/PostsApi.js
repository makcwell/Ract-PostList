import {BASE_URL} from "../constants/constants";


export const addPost = async (data) => {
    let response = await fetch(`${BASE_URL}/v2/group-10/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    })
    return response
}

export const getPostPagination = async (page, limit, query) => {
    let response = await fetch(`${BASE_URL}/v2/group-10/posts/paginate?page=${page}&limit=${limit}&query=${query}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    })
    const result = await response.json()
    return result
}

export const getAllPosts = async () => {
    try {
        let response = await fetch(`${BASE_URL}/v2/group-10/posts`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        const result = await response.json()
        return result
    } catch (e) {
        console.log(e)
    }
}
export const getPostById = async (id) => {
    try {
        let response = await fetch(`${BASE_URL}/v2/group-10/posts/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        const result = await response.json()
        return result
    } catch (e) {
        console.log(e)
    }
}

export const addComment = async (data, id) => {
    try {
        let response = await fetch(`${BASE_URL}/v2/group-10/posts/comments/${id}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result
    } catch (e) {
        console.log(e)
    }
}

export const delComment = async (postId, commentId) => {
    try {
        let response = await fetch(`${BASE_URL}/v2/group-10/posts/comments/${postId}/${commentId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        const result = await response.json()

        return result
    } catch (e) {
        console.log(e)
    }
}

export const getAllComments = async (postId) => {

    try {
        let response = await fetch(`${BASE_URL}/v2/group-10/posts/comments/${postId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        const result = await response.json()
        return result
    } catch (e) {

    }
}

export const delPost = async (postId) => {
    try {
        await fetch(`${BASE_URL}/v2/group-10/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
    } catch (e) {
        console.log(e)
    }
}

// const onResponse = (res) => {
//     return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
// }


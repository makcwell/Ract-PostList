import { BASE_URL } from "../constants/constants";


export const addPost = async (data) => {
    try {
        if (data) {
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
    } catch (e) {
        console.error(`Ошибка данных в addPost ${e.message}`)
    }
}

export const getPostPagination = async (page, limit, query) => {
    try {
        if (page && limit) {
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
    } catch (e) {
        console.error(`Ошибка данных в getPostPagination ${e.message}`)
    }
}

export const setLikeOnCard = async (cardId, isLike) => {
    try {
        let response = await fetch(`${BASE_URL}/v2/group-10/posts/likes/${cardId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        const result = await response.json()
        return result
    } catch (e) {
        console.error(`Ошибка данных в setLikeOnCard ${e.message}`)
    }
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
        if (result) {
            return result
        }
    } catch (e) {
        console.error(`Ошибка данных в getAllPosts ${e.message}`)
    }
}
export const getPostById = async (id) => {
    try {
        if (id) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts/${id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            const result = await response.json()
            return result
        }
    } catch (e) {
        console.error(`Ошибка данных в getPostById ${e.message}`)
    }
}

export const addComment = async (data, id) => {
    try {
        if (data && id) {
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
        }
    } catch (e) {
        console.error(`Ошибка данных в addComment ${e.message}`)
    }
}

export const delComment = async (postId, commentId) => {
    try {
        if (postId && commentId) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts/comments/${postId}/${commentId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            const result = await response.json()
            return result
        }
    } catch (e) {
        console.error(`Ошибка данных в delComment ${e.message}`)
    }
}

export const getAllComments = async (postId) => {
    try {
        if (postId) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts/comments/${postId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            const result = await response.json()
            return result
        }
    } catch (e) {
        console.error(`Ошибка данных в getAllComments ${e.message}`)
    }
}

export const delPost = async (postId) => {
    try {
        if (postId) {
            await fetch(`${BASE_URL}/v2/group-10/posts/${postId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
        }
    } catch (e) {
        console.error(`Ошибка данных в delPost ${e.message}`)
    }
}

export const setPost = async (data, id) => {
    try {
        await fetch(`${BASE_URL}/v2/group-10/posts/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })
    } catch (e) {
        console.error(`Ошибка данных в setPost ${e.message}`)
    }
}




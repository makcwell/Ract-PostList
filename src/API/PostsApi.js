import {BASE_URL, headersData} from "../constants/constants";


export const addPost = async (data) => {
    try {
        if (data) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts`, {
                method: 'POST',
                headers: headersData,
                body: JSON.stringify(data)
            })
            return response
        }
        throw new Error('Ошибка данных в getPostPagination')
    } catch (e) {
        console.log(e)
    }
}

export const getPostPagination = async (page, limit, query) => {
    try {
        if (page && limit) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts/paginate?page=${page}&limit=${limit}&query=${query}`, {
                method: 'GET',
                headers: headersData,
            })
            const result = await response.json()
            return result
        }
        throw new Error('Ошибка данных в getPostPagination')
    } catch (e) {
        console.log(e)
    }
}

export const getAllPosts = async () => {
    try {
        let response = await fetch(`${BASE_URL}/v2/group-10/posts`, {
            method: 'GET',
            headers: headersData,
        })
        const result = await response.json()
        if (result) {
            return result
        }
        throw new Error('Ошибка данных в getAllPosts')
    } catch (e) {
        console.log(e)
    }
}
export const getPostById = async (id) => {
    try {
        if (id) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts/${id}`, {
                method: 'GET',
                headers: headersData,
            })
            const result = await response.json()
            return result
        }
        throw new Error('Ошибка данных в getPostById')
    } catch (e) {
        console.log(e)
    }
}

export const addComment = async (data, id) => {
    try {
        if (data && id) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts/comments/${id}`, {
                method: 'POST',
                headers: headersData,
                body: JSON.stringify(data)
            })
            const result = await response.json()
            return result
        }
        throw new Error('Ошибка данных в addComment')
    } catch (e) {
        console.log(e)
    }
}

export const delComment = async (postId, commentId) => {
    try {
        if (postId && commentId) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts/comments/${postId}/${commentId}`, {
                method: 'DELETE',
                headers: headersData,
            })
            const result = await response.json()
            return result
        }
        throw new Error('Ошибка данных в delComment')
    } catch (e) {
        console.log(e)
    }
}

export const getAllComments = async (postId) => {
    try {
        if (postId) {
            let response = await fetch(`${BASE_URL}/v2/group-10/posts/comments/${postId}`, {
                method: 'GET',
                headers: headersData,
            })
            const result = await response.json()
            return result
        }
        throw new Error('Ошибка данных в getAllComments')
    } catch (e) {
        console.log(e)
    }
}

export const delPost = async (postId) => {
    try {
        if (postId) {
            await fetch(`${BASE_URL}/v2/group-10/posts/${postId}`, {
                method: 'DELETE',
                headers: headersData,
            })
        }
        throw new Error('Ошибка данных в delPost')
    } catch (e) {
        console.log(e)
    }
}

export const setPost = async (data, id) => {
    try {
        if (data && id) {
            await fetch(`${BASE_URL}/v2/group-10/posts/${id}`, {
                method: 'PATCH',
                headers: headersData,
                body: JSON.stringify(data)
            })
        }
        throw new Error('Ошибка данных в delPost')
    } catch (e) {
        console.log(e)
    }
}




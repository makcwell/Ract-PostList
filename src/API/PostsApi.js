import { BASE_URL } from "../constants/constants";


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

const token = localStorage.getItem("token")
const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

const config = {
    baseUrl: 'https://api.react-learning.ru/v2/group-10',
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
    }
}

class PostsApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._header = headers;
    }

    // Получение всех постов
    getAllPosts() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: this._header
        }).then(onResponse)
    }

}

const apiPosts = new PostsApi(config)


export default apiPosts;
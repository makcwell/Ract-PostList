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






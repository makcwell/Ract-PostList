import { BASE_URL } from "../constants/constants";
export const addPost = async (data) => {
    let response = await fetch(`${BASE_URL}/v2/group-10/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    })
    return response
}
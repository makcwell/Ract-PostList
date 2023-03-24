import { BASE_URL } from "../constants/constants";


export async function setAuthData(data) {
    let response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    let commits = await response.json();
    localStorage.setItem("email", `${data.email}`)
    localStorage.setItem("password", `${data.password}`)
    localStorage.setItem("token", commits.token)
    return commits
}

export const getUserInfo = async () => {
    const response = await fetch(`${BASE_URL}/v2/group-10/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const result = await response.json()
    return result
}

export const getRegistrationUser = async (data) => {
    const response = await fetch(`${BASE_URL}/signup `, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
}

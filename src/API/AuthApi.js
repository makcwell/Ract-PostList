let BASE_URL = 'https://api.react-learning.ru';

export async function setAuthData(inputMail, inputPassword) {
    let data = {
        email: inputMail,
        password: inputPassword
    }
    let response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    let commits = await response.json();
    localStorage.setItem("email", `${inputMail}`)
    localStorage.setItem("password", `${inputPassword}`)
    localStorage.setItem("token", commits.token)
    return commits.token
}

export const getUserInfo = async (group) => {
    const response = await fetch(`${BASE_URL}/v2/${group}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ` + localStorage.getItem('token')
        },
    })
    const result = await response.json()
    return result
}



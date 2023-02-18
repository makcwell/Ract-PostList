
const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}
class AuthApi {
    constructor({baseUrl, headers, body}) {
        this._baseUrl= baseUrl;
        this._headers = headers;
        this._body = body;
    }
    // Авторизация
    getToken() {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'PATCH',
            headers: this._headers,
            body: this._body
        })
            .then(onResponce)
            .then(localStorage.setItem('Bearer',onResponce.token))
    }









}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'content-type': 'application/json',
        // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0MTM0NDU5Yjk4YjAzOGY3N2IzYmIiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc1ODkyMTUwLCJleHAiOjE3MDc0MjgxNTB9.qsLaIEGQoFj_sV3DZXhvx0mJf23d-mTB0WkFxfhbqrU'
    body: {
        "email": "from input login authorization form",
        "password": "from input password authorization form"
    }
    }
}

const authApi = new AuthApi(config)

export default authApi
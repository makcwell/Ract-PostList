
export const AVATAR_TERREIN = 'https://avatars.githubusercontent.com/u/71286606?s=400&u=e43bf01745d3e4e715effbe97c0b6a5d104e4408&v=4'
export const AVATAR_MAKCWELL = 'https://avatars.githubusercontent.com/u/106441725?v=4'
export const AVATAR_MADDEVELOPER = 'https://avatars.githubusercontent.com/u/80468263?v=4'
export const AVATAR_KRAT = 'https://avatars.githubusercontent.com/u/115191188?v=4'
export const YODA = 'https://nationaltoday.com/wp-content/uploads/2020/05/Yoda.jpg'
export const BASE_URL = 'https://api.react-learning.ru';


export const EMAIL_PATTERN = {
    required: {
        value: true,
        message: 'Обязательное поле для ввода'
    },
    pattern: {
        message: 'Email в формате expamle@example.com',
        value: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    }
}
export const PASSWORD_PATTERN = {
    required: {
        value: true,
        message: 'Обязательное поле для ввода'
    },
    pattern: {
        message: 'Пароль должен содержать минимум 8 символов, одну букву латинского алфавита и одну цифру',
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    }
}
export const USER_PATTERN = {
    required: {
        value: true,
        message: 'Обязательное поле для ввода'
    },
}
export const USER_AGREEMENT = 'Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.'

export const LIMIT = 9

export const REQUIRED_PATTERN = {
    required: {
        value: true,
        message: 'Обязательное поле для ввода'
    }
}

import { styled } from '@mui/material/styles';
import InputBase from "@mui/material/InputBase";
export const AVATAR_TERREIN = 'https://avatars.githubusercontent.com/u/71286606?s=400&u=e43bf01745d3e4e715effbe97c0b6a5d104e4408&v=4'
export const AVATAR_MAKCWELL = 'https://avatars.githubusercontent.com/u/106441725?v=4'
export const AVATAR_MADDEVELOPER = 'https://avatars.githubusercontent.com/u/80468263?v=4'
export const AVATAR_KRAT = 'https://avatars.githubusercontent.com/u/115191188?v=4'
export const YODA = 'https://nationaltoday.com/wp-content/uploads/2020/05/Yoda.jpg'
export const BASE_URL = 'https://api.react-learning.ru';

export const emailPattern = {
    required: {
        value: true,
        message: 'Обязатель поле для ввода'
    },
    pattern: {
        message: 'Email в формате expamle@example.com',
        value: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    }
}
export const passwordPattern = {
    required: {
        value: true,
        message: 'Обязатель поле для ввода'
    },
    pattern: {
        message: 'Пароль должен содержать минимум 8 символов, одну букву латинского алфавита и одну цифру',
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    }
}

export const userAgreement = 'Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.'




export const Search = styled('div')(({ theme }) => ({
    position: "relative",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#1976d2",
    '&:hover': {
        backgroundColor: "#1976d2",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
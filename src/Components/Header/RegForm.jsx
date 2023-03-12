import styles from './RegForm.module.css'
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

// 2 строка косяк --решено: установить: npm i react-hook-form --9/03/23

function RegistrationForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Регистрация</h3>
            <input
                {...register('name')}
                // defaultValue="MyName"
                type="text"
                placeholder="Имя"
            />

            <input
                {...register('email')}
                type="text"
                placeholder="Email"
            />

            <input
                {...register('password', {
                    required: 'Обязательное поле',
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру"
                    }
                })}
                type="password"
                placeholder="Password"
            />
            <div className={styles.errorMessage}>
                {errors?.password && <p>{errors?.password?.message}</p>}
            </div>

            <button>Зарегистрироваться</button>
        </form>
    );
};

export default RegistrationForm;
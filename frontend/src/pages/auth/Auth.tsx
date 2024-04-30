import React from 'react';
import s from './auth.module.css'
import Input from "../../components/UI/Input/Input";

const Auth = () => {
    return (
        <div>
            <h1 className={s.auth_title}>Авторизация</h1>
            <div className={s.wrapper}>
                <Input placeholder='Введите никнейм'/>
                <Input placeholder='Введите пароль'/>
            </div>
            <button className={s.btn}>Войти в аккаунт</button>
        </div>
    );
};

export default Auth;
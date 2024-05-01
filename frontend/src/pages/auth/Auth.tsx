import React from 'react';
import s from './auth.module.css'
import Input from "../../components/UI/Input/Input";
import logo from '../../../../build/appicon.png'


const Auth = () => {




    return (
        <div className={s.container}>
            <div className={s.logo}>
            <img src={logo}/>
            </div>

            <div>
            <h1 className={s.auth_title}>Авторизация</h1>
            <div className={s.wrapper}>
                <Input placeholder='Введите никнейм'/>
                <Input placeholder='Введите пароль'/>
            </div>
            <button className={s.btn}>Войти в аккаунт</button>
            </div>
        </div>
    );
};

export default Auth;
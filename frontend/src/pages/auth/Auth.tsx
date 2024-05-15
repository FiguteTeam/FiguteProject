import React from 'react';
import s from './auth.module.css'
import Input from "../../components/UI/Input/Input";
import logo from '../../../../build/appicon.png'
import Modal from "../../components/UI/Modal/Modal";
import {Link} from "react-router-dom";


const Auth = () => {

    // const handleAuth = () => {} - функция для реализация авт

    return (
        <div className={s.container}>
            <div className={s.logo}>
                <img src={logo}/>
            </div>

            <div>
                <h1 className={s.auth_title}>Авторизация</h1>
                <div className={s.wrapper}>
                    <Input type='name' placeholder='Введите никнейм'/>
                    <Input type='password' placeholder='Введите пароль'/>
                </div>
                <Link to='/home' className={s.btn}>Войти в аккаунт</Link>
            </div>


            <Modal/>


        </div>
    );
};


export default Auth;
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getUserInfo } from "../../services/apiRequests/AuthAPI.js";

const UserPage = () => {
    const [cookies] = useCookies("jwt");
    const [user, setUser] = useState({});
    useEffect(() => {
        getUserInfo(cookies.jwt)
            .then((response) => {
                setUser(response.data.user);
            })
            .catch((error) => {
                let errorStatus = error.response.data.status;
                console.log(errorStatus);
            });
    }, [cookies]);

    return (
        <div>
            <h1>Личный кабинет: {user.name}</h1>
            <h2>Информация о пользователе: </h2>
            <img src="" alt="ФОТО ПРОФИЛЯ" />
            <ul>
                <li>Имя: {user.name}</li>
                <li>Возраст: </li>
                <li>Электронная почта: {user.email}</li>
            </ul>
            <h2>Настройки аккаунта:</h2>
            <ul>
                <li>Изменить пароль</li>
                <li>Изменить настройки уведомлений</li>
                <li>Изменить язык</li>
            </ul>
            <h2>Текущие курсы:</h2>
            <ul>
                <li>Курс 2</li>
                <li>Курс 1</li>
                <li>Курс 3</li>
            </ul>
        </div>
    );
};

export default UserPage;

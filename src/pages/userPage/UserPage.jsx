import Header from "../../components/header/Header";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getUserInfo } from "../../services/apiRequests/AuthAPI.js";
import classes from "./UserPage.module.css";

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
    <>
      <Header />
      <div className={classes.mainBlock}>
        <h1>Личный кабинет: {user.name}</h1>
        <h2>Информация о пользователе: </h2>
        <img src="" alt="ФОТО ПРОФИЛЯ" />
        <ul>
          <li>
            Имя:{" "}
            <input
              className={classes.firstName}
              type="text"
              placeholder={user.name}
            />
          </li>
          <li>
            Возраст: <input className={classes.age} type="number" />{" "}
          </li>
          <li>
            Электронная почта:{" "}
            <input
              className={classes.email}
              type="text"
              placeholder={user.email}
            />
          </li>
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
    </>
  );
};

export default UserPage;

import React, { useEffect } from "react";
import classes from "./Registration.module.css";
import DefaultInput from "../../components/textInputs/defailtValue/DefaultInput";
import SelectItem from "../../components/textInputs/selectItem/SelectItem";
import { useNavigate } from "react-router-dom";
import {
  registerApi,
  getUserRoles
} from "../../services/apiRequests/AuthAPI.js";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

const Registration = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    login: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: ""
  });
  const [errors, setErrors] = useState();
  const [isLoading, setLoading] = useState(false);
  const [userRoles, setUserRoles] = useState([]);

  const changeField = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  useEffect(() => {
    (async () => {
      getUserRoles()
        .then((response) => {
          setUserRoles(response.data.roles);
        })
        .catch((error) => {
          setErrors("");
        });
    })();
  }, []);

  const [setCookie] = useCookies(["jwt"]);

  const submit = (e) => {
    e.preventDefault();
    if (!user.role) {
      setErrors("Необходимо выбрать роль");
      return;
    }
    setErrors("");
    setLoading(true);
    (async () => {
      registerApi(user)
        .then((response) => {
          setCookie("jwt", response.data.body.authorization.token);
          setCookie("role", user.role)
          navigate("/home");
        })
        .catch((error) => {
          let errorStatus = error.response.data.status;
          if (errorStatus === "validator error") {
            // массив ошибок
            let errors = Object.entries(error.response.data.errors);
            let oneError = errors[0][1][0];

            setErrors(oneError);
          } else if (errorStatus === "error") {
            setErrors(error.response.data.message);
          }
        });
    })();
    setLoading(false);
  };
  return (
    <div className={classes.container}>
      <form className={classes.blockInformation} onSubmit={submit}>
        <h2 className={classes.loginTitle}>Регистрация</h2>
        <DefaultInput
          placeholder="Логин"
          onChange={(e) => {
            changeField("login", e.target.value);
          }}
          value={user.login}
          type="text"
        ></DefaultInput>
        <DefaultInput
          placeholder="Email"
          onChange={(e) => {
            changeField("email", e.target.value);
          }}
          value={user.email}
          type="email"
        ></DefaultInput>
        <DefaultInput
          placeholder="Пароль"
          onChange={(e) => {
            changeField("password", e.target.value);
          }}
          value={user.password}
          type="password"
        ></DefaultInput>
        <DefaultInput
          placeholder="Подтвердите пароль"
          onChange={(e) => {
            changeField("password_confirmation", e.target.value);
          }}
          value={user.password_confirmation}
          type="password"
        ></DefaultInput>
        <SelectItem
          items={userRoles}
          onChange={(e) => {
            changeField("role", e.target.value);
          }}
        />
        <div className={classes.infAboutError}>{errors}</div>
        <Button
          disabled={isLoading}
          className={classes.btnRegistration}
          type="submit"
        >
          {isLoading ? <>Загрузка...</> : <>Зарегистрироваться</>}
        </Button>
        <span className={classes.footerRegistration}>
          Уже есть аккаунт?
          <span
            className={classes.loginLink}
            onClick={(e) => {
              navigate("/login");
            }}
          >
            Войти
          </span>
        </span>
      </form>
    </div>
  );
};

export default Registration;

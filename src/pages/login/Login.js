import React from "react";
import classes from "./Login.module.css";
import DefaultInput from "../../components/textInputs/defailtValue/DefaultInput";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getDataFromLoginRequest } from "../../services/responseParsing/authResponseParser";
import { useCookies } from "react-cookie";
import { authApi } from "../../services/apiRequests/AuthAPI";

const Login = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState();
  const [isLoading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["jwt"]);

  const changeField = (field, value) => {
    setModel({ ...model, [field]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setErrors("");

        setLoading(true);
        (async () => {
            authApi(model)
                .then((response) => {
                    setCookie("jwt", response.data.body.authorization.token);
                    setCookie("role", response.data.body.role);
                    window.location = `${process.env.REACT_APP_LOCAL_URL}/home`; // redirect to main page
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
    <>
      <div className={classes.container}>
        <form className={classes.blockInformation} onSubmit={submit}>
          <h2 className={classes.loginTitle}>Авторизация</h2>
          <DefaultInput
            placeholder="Логин"
            onChange={(e) => {
              changeField("email", e.target.value);
            }}
            value={model.email}
          ></DefaultInput>
          <DefaultInput
            placeholder="Пароль"
            onChange={(e) => {
              changeField("password", e.target.value);
            }}
            value={model.password}
            type="password"
          ></DefaultInput>
          <div className={classes.infAboutError}>{errors}</div>
          <Button
            disabled={isLoading}
            className={classes.btnLogin}
            type="submit"
          >
            {isLoading ? <>Загрузка...</> : <>Войти</>}
          </Button>
          <span className={classes.footerLogin}>
            Нет аккаунта?
            <span
              className={classes.registerLink}
              onClick={(e) => {
                navigate("/registration");
              }}
            >
              Зарегистрироваться
            </span>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;

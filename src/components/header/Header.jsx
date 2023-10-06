import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logotip.png";
import { useNavigate } from "react-router-dom";
import UnAutorizedButtons from "./unAutorizedButtons/UnAutorizedButtons";
import { useCookies } from "react-cookie";
import { checkUser } from "../../services/apiRequests/AuthAPI";
import DropDown from "../dropDown/DropDown";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [cookie] = useCookies(["jwt"]);

  const [isAutorized, setAutorized] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [isTeacher, setIsTeacher] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = cookie.jwt;
    if (!jwt) {
      setAutorized(false);
      return;
    }
    (async () => {
      checkUser(jwt)
        .then((response) => {
          setAutorized(response.data.status === "success");
        })
        .catch((error) => {
          setAutorized(false);
        });
    })();
  }, [cookie.jwt]);
  useEffect(() => {
    setIsTeacher(cookie.role === "teacher");
  }, [cookie]);

  return (
    <header className={classes.head}>
      <img
        className={classes.logo}
        src={logo}
        alt="Logo"
        onClick={(e) => {
          navigate("/home");
        }}
      />
      {isAutorized ? (
        <div
          className={classes.menu}
          onMouseEnter={(e) => {
            setOpenProfile(true);
          }}
          onMouseLeave={(e) => {
            setOpenProfile(false);
          }}
        >
          <MenuIcon />
          {openProfile && (
            <DropDown
              items={[
                { href: "/userPage", value: "Личный кабинет" },
                { href: "/courses", value: "Мои курсы" },
                { href: "/classes", value: "Классы" }
              ]}
            />
          )}
        </div>
      ) : (
        <UnAutorizedButtons />
      )}
    </header>
  );
};

export default Header;

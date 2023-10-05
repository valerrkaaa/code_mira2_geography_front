import React from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import classes from "./MainActivity.module.css";
import { useState } from "react";
import BlockCourses from "../../components/blockCourses/BlockCourses";

const MainActivity = () => {
  const items = [
    { value: "Личный кабинет", href: "/home" },
    { value: "Оценки", href: "" },
    { value: "Мои курсы", href: "" },
    { value: "Сообщения", href: "" }
  ];
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.searchLine}>
        <SearchBar placeholder="Поиск по названию курса" />
      </div>
      <BlockCourses />
    </div>
  );
};

export default MainActivity;

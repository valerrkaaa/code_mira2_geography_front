import React from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import classes from "./MainActivity.module.css";
import { useState } from "react";
import BlockCourses from "../../components/blockCourses/BlockCourses";

const MainActivity = () => {
  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.searchLine}>
        <SearchBar placeholder="Поиск по названию курса" />
      </div>
      <div className={classes.listTask}>
        {/* цикл */}
        <BlockCourses />
      </div>
    </div>
  );
};

export default MainActivity;

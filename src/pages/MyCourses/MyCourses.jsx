import React from "react";
import classes from "./MyCourses.module.css";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import BlockCourses from "../../components/blockCourses/BlockCourses";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.SearchLine}>
        <SearchBar placeholder="Поиск по названию курса" />
        <Button
          className={classes.btnAddCourses}
          onClick={(e) => {
            navigate("/createcourses");
          }}
        >
          Добавить курс
        </Button>
      </div>
      <BlockCourses />
    </div>
  );
};

export default MyCourses;

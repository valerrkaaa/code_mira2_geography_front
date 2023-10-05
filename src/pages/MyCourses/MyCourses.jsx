import React, { useEffect, useState } from "react";
import classes from "./MyCourses.module.css";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import BlockCourses from "../../components/blockCourses/BlockCourses";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const MyCourses = () => {
  const navigate = useNavigate();

  const [cookie] = useCookies(["role"]);
  const [isTeacher, setIsTeacher] = useState(true);
  useEffect(() => {
    console.log(cookie.role);
    setIsTeacher(cookie.role === "teacher");
  }, [cookie]);
  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.SearchLine}>
        <SearchBar placeholder="Поиск по названию курса" />
        {isTeacher ? (
          <Button
            className={classes.btnAddCourses}
            onClick={(e) => {
              navigate("/createcourses");
            }}
          >
            Добавить курс
          </Button>
        ) : (
          <></>
        )}
      </div>
      <BlockCourses />
    </div>
  );
};

export default MyCourses;

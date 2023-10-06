import React, { useEffect, useState } from "react";
import classes from "./MyCourses.module.css";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import BlockCourses from "../../components/blockCourses/BlockCourses";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getTeacherLessons } from "../../services/apiResponseParsers/homeworkParser";

const MyCourses = () => {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);
  const [cookies] = useCookies();

  const [isTeacher, setIsTeacher] = useState(true);
  useEffect(() => {
    setIsTeacher(cookies.role === "teacher");
    getTeacherLessons(cookies.jwt)
      .then((response) => {
        if (response[0]) {
          setLessons(response[1]);
        }
      })
      .catch();
  }, [cookies]);

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
      <div className={classes.listTask}>
        {lessons.map((item) => {
          return (
            <BlockCourses
              key={item.id}
              id={item.id}
              name={item.name}
              photo={item.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyCourses;

import React, { useEffect, useState } from "react";
import classes from "./MyCourses.module.css";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import BlockCourses from "../../components/blockCourses/BlockCourses";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getTeacherLessons } from "../../services/apiResponseParsers/lessonParser";

const MyCourses = () => {
    const navigate = useNavigate();
    const [isTeacher, setIsTeacher] = useState(true);
    const [lessons, setLessons] = useState([]);
    const [cookies] = useCookies();

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

    const refresh = () => {
        console.log("load");
    }

    const deleteLessonById = (id) => {
        setLessons(lessons.filter(item=>item.id !== id))
    }

    return (
        <div className={classes.backGround}>
            <Header />
            <div className={classes.SearchLine}>
                <SearchBar placeholder="Поиск по названию курса" />
                {isTeacher ? (
                    <Button
                        className={classes.btnAddCourses}
                        onClick={(e) => {
                            navigate("/createcourses/create", {refresh: refresh});
                        }}
                    >
                        Добавить курс
                    </Button>
                ) : (
                    <></>
                )}
            </div>
            {lessons.map((item) => {
                return (
                    <BlockCourses
                        needShowButtons={true}
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        photo={item.photo}
                        deleteLessonById={deleteLessonById}
                    />
                );
            })}
        </div>
    );
};

export default MyCourses;

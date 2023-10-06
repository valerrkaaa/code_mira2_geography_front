import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import classes from "./MainActivity.module.css";
import { useState } from "react";
import BlockCourses from "../../components/blockCourses/BlockCourses";
import { getLessons } from "../../services/apiResponseParsers/homeworkParser";
import { useCookies } from "react-cookie";

const MainActivity = () => {
    const [cookies] = useCookies(["jwt"]);
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        getLessons(cookies.jwt).then((response) => {
            if (response[0]) {
                setLessons(response[1]);
            }
        });
    }, [cookies.jwt]);

    return (
        <div className={classes.backGround}>
            <Header />
            <div className={classes.searchLine}>
                <SearchBar placeholder="Поиск по названию курса" />
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

export default MainActivity;

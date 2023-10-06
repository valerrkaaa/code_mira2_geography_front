import React, { useEffect } from "react";
import classes from "./ListStudent.module.css";
import Header from "../../components/header/Header";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "react-bootstrap";
import { getClassList } from "../../services/apiResponseParsers/studentsParser";
import { useCookies } from "react-cookie";
import { observer } from "mobx-react-lite";
import StudentStore from "../../store/StudentStore";

const ListStudents = observer((props) => {
    const [cookies] = useCookies();

    useEffect(() => {
        getClassList(cookies.jwt).then(([isSuccess, content]) => {
            if (isSuccess) {
                console.log(content);
                StudentStore.setClassList(content);
            } else {
                console.log("error", content);
            }
        });
    }, [cookies.jwt]);

    return (
        <div className={classes.backGround}>
            <Header />
            <div className={classes.content}>
                {StudentStore.classList.map((item) => {
                    return (
                        <div key={item.id} className={classes.classTittle}>
                            <div className={classes.classTittle}>
                                <div className={classes.headerClass}>
                                    <h2>{item.name}</h2>
                                    <Button>
                                        <ArrowDownwardIcon />
                                    </Button>
                                </div>
                                {StudentStore.getStudents(item.id).map(
                                    (student) => {
                                        return (
                                            <div key={student.id}>
                                                <div className={classes.Letter}>
                                                    <div
                                                        className={
                                                            classes.rowstudent
                                                        }
                                                    >
                                                        {student.email}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default ListStudents;

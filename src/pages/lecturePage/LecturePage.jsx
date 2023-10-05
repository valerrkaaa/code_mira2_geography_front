import React, { useEffect } from "react";
import classes from "./LecturePage.module.css";
import TextField from "../../components/lectureFields/notEditableFieldTypes/TextField";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import editableLecture from "../../store/EditableLecture.js";

const LecturePage = observer(() => {
    const params = useParams();
    const [cookies] = useCookies(["jwt"]);

    useEffect(() => {
        editableLecture.loadData(cookies.jwt, params.id);
    }, [cookies.jwt, params.id]);

    return (
        <div>
            <Header />
            <div className={classes.lesson_title}>
                {editableLecture.lectureName}
            </div>
            {Object.entries(editableLecture.contentList).map(([key, item]) => {
                switch (item.type) {
                    case "text":
                        return (
                            <TextField
                                key={key}
                                text={item.text}
                                changeHandler={(e) =>
                                    editableLecture.updateItem(
                                        key,
                                        e.target.value
                                    )
                                }
                            />
                        );
                    default:
                        return (
                            <div className={classes.unknown_text} key={item.id}>
                                unknown type: {item.type}
                            </div>
                        );
                }
            })}
        </div>
    );
});

export default LecturePage;

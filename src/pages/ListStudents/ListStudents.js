import React, { useEffect } from "react";
import classes from "./ListStudent.module.css";
import Header from "../../components/header/Header";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { observer } from "mobx-react-lite";
import StudentStore from "../../store/StudentStore";

const ListStudents = observer((props) => {
  const [cookies] = useCookies();

    useEffect(() => {
        StudentStore.loadClassList(cookies.jwt);
    }, [cookies.jwt]);

  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.content}>
        {StudentStore.classList.map((item) => {
          return (
            <div key={item.id} className={classes.classTittle}>
                <div className={classes.headerClass}>
                  <h2 className={classes.nameTittle}>{item.name}</h2>
                  <Button className={classes.btnExpand}>
                    <ArrowDownwardIcon />
                  </Button>
                </div>
                <div className={classes.perimeterClass}>
                  {StudentStore.getStudents(item.id).map((student) => {
                    return (
                      <div key={student.id}>
                        <div className={classes.Letter}>
                          <div className={classes.rowstudent}>
                            {student.email}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ListStudents;

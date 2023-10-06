import { makeAutoObservable } from "mobx";
import {
    getClassList,
    getStudentList,
} from "../services/apiResponseParsers/studentsParser";

class StudentStore {
    classList = [];
    constructor() {
        makeAutoObservable(this);
    }

    setClassList = (classList) => {
        this.classList = classList;
    };

    getStudents = (classId) => {
        let output = []
        this.classList.forEach(element => {
            if (element.id === classId){
                output = element.pupils
            }
        });
        return output
    }
}

export default new StudentStore();

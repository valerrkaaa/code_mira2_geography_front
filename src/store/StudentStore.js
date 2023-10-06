import { makeAutoObservable } from "mobx";
import { getClassList } from "../services/apiResponseParsers/studentsParser";

class StudentStore {
    classList = [];
    constructor() {
        makeAutoObservable(this);
    }

    loadClassList = (token) => {
        getClassList(token).then(([isSuccess, content]) => {
            if (isSuccess) {
                this.setClassList(content);
            } else {
                console.log("error", content);
            }
        });
    }

    setClassList = (classList) => {
        
        this.classList = [...classList];
        this.classList.forEach(item => item.button = true)
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

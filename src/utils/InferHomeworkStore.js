import {HomeworkTeacherModeStore} from "../store/HomeworkTeacherModeStore";

export const isTeacherMode = (store) => store instanceof HomeworkTeacherModeStore;
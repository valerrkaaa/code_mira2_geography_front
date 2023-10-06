import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import LecturePage from "./pages/lecturePage/LecturePage";
import EditableLecturePage from "./pages/lecturePage/EditableLecturePage";
import UserPage from "./pages/userPage/UserPage";
import MainActivity from "./pages/Home/MainActivity";
import MyCourses from "./pages/MyCourses/MyCourses";
import CreateCourses from "./pages/CreateCourses/CreateCourses";
import PerformCourses from "./pages/PerformCourses/PerformCourses";
import Liststudents from "./pages/ListStudents/ListStudents";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/userPage" element={<UserPage />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/lection/:id" element={<LecturePage />} />
      <Route path="/edit_lection/:id" element={<EditableLecturePage />} />
      <Route path="/home" element={<MainActivity />} />
      <Route path="/courses" element={<MyCourses />} />
      <Route path="/createcourses" element={<CreateCourses />} />
      <Route path="/createcourses" element={<CreateCourses />} />
      <Route path="/classes" element={<Liststudents />} />
      <Route path="*" element={<Welcome />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

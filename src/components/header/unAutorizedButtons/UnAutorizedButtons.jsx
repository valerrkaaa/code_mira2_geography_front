import React from "react";
import classes from "./UnAutorizedButtons.module.css";
import { useNavigate } from "react-router-dom";

const UnAutorizedButtons = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.areaButton}>
      <button
        className={classes.btnLogin}
        onClick={(e) => {
          navigate("/login");
        }}
      >
        Log in
      </button>
      <button
        className={classes.btnRegistration}
        onClick={(e) => {
          navigate("/registration");
        }}
      >
        Registration
      </button>
    </div>
  );
};

export default UnAutorizedButtons;

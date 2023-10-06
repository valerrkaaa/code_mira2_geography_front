import React from "react";
import classes from "./Game.module.css";
import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../../components/header/Header";
import DrawingBoard from "../../components/DrawingBoard/DrawingBoard";

const unityContext = new UnityContext({
  loaderUrl: "/assets/Build/BuildUnity.loader.js",
  dataUrl: "/assets/Build/BuildUnity.data.unityweb",
  frameworkUrl: "/assets/Build/BuildUnity.framework.js.unityweb",
  codeUrl: "/assets/Build/BuildUnity.wasm.unityweb"
});

const Game = () => {
  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.Game}>
        <Unity className={classes.mainBlock} unityContext={unityContext} />
      </div>
    </div>
  );
};

export default Game;

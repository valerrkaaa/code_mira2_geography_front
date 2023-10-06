import React, { useState } from "react";
import classes from "./Game.module.css";
import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../../components/header/Header";
import { PaintBox } from "../../components/PaintBox/PaintBox";
import { Button } from "react-bootstrap";

const unityContext = new UnityContext({
  loaderUrl: "/assets/Build/GAME4.loader.js",
  dataUrl: "/assets/Build/webgl.data",
  frameworkUrl: "/assets/Build/build.framework.js",
  codeUrl: "/assets/Build/build.wasm"
});

const Game = () => {
  const [isZoom, setIsZoom] = useState(false);
  const [isCanvas, setIsCanvas] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "https://www.example.com/path/to/archive.zip"; // Замените ссылку на ссылку на архив на своем сайте
  //   link.download = "archive.zip"; // Замените имя файла на свое имя файла
  //   link.click();
  // };

  return (
    <div className={classes.backGround}>
      <Header />
      <div className={classes.Game}>
        <Unity className={classes.mainBlock} unityContext={unityContext} />
      </div>
      <div className={classes.ChooseBtn}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className={classes.zoom}
            style={{ flex: 1, marginRight: "10px" }}
          >
            Zoom
          </button>
          <button
            className={classes.zoom1}
            style={{ flex: 1, marginRight: "10px" }}
            onClick={(e) => {
              setIsCanvas(true);
              setIsZoom(false);
              setIsDownload(false);
            }}
          >
            Холст
          </button>
          <button
            className={classes.zoom2}
            style={{ flex: 1 }}
            onClick={(e) => {
              setIsCanvas(false);
              setIsZoom(false);
              setIsDownload(true);
            }}
          >
            Компьютерная версия
          </button>
        </div>
      </div>

      {isCanvas ? (
        <div className={classes.Paint}>
          <PaintBox
            width={300}
            height={300}
            onSave={(blob) => console.log(blob)}
          />
        </div>
      ) : (
        <></>
      )}
      {isDownload ? (
        <div className={classes.Download}>
          <Button className={classes.btnDownLoad}>Скачать приложение</Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;

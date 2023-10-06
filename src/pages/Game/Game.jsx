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
 
  const handleDownload = () => { 
    const link = document.createElement("a"); 
    link.href = "../../../public/DownloadFile/GAME_PC.zip"; // Замените ссылку на ссылку на архив на своем сайте 
    link.download = "GAME_PC.zip"; // Замените имя файла на свое имя файла 
    link.click(); 
  }; 
 
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
            onClick={(e) => { 
              setIsCanvas(false); 
              setIsZoom(true); 
              setIsDownload(false); 
            }} 
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
          <Button className={classes.btnDownLoad} onClick={handleDownload}> 
            Скачать приложение 
          </Button> 
        </div> 
      ) : ( 
        <></> 
      )} 
      {isZoom ? ( 
        <div className={classes.Download}> 
          <a 
            href={`https://zoom.us/oauth/authorize? 
 
response_type=code&client_id=${process.env.ZOOM_API_KEY}&redirect_uri=${process.env.ZOOM_REDIRECT_URL}`} 
          > 
            Connect Zoom 
          </a> 
        </div> 
      ) : ( 
        <></> 
      )} 
    </div> 
  ); 
}; 
 
export default Game;
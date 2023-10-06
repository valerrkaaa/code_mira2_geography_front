import React, { useState, useRef, useEffect } from "react";

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleMouseDown = (event) => {
      if (event.button === 2) {
        setIsDrawing(true);
      }
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    const handleMouseMove = (event) => {
      if (isDrawing) {
        console.log("test" + event.nativeEvent);
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        if (event.buttons === 1) {
          ctx.clearRect(x, y, 5, 5); // Стираем рисунок при зажатии левой кнопки мыши
        } else {
          ctx.fillRect(x, y, 5, 5); // Рисуем при задержанной правой кнопке мыши
        }
      }
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDrawing]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
};

export default DrawingBoard;

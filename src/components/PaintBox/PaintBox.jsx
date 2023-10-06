import { ReactPainter } from "react-painter";
import classes from "./PaintBox.module.css";

const Control = ({ title, type, onChange, defaultValue, width }) => {
  return (
    <label htmlFor={title}>
      <span>{title}: </span>
      <input
        type={type}
        onChange={onChange}
        id={title}
        defaultValue={defaultValue}
        width={width}
      />
    </label>
  );
};

export const PaintBox = ({ width, height, onSave }) => {
  return (
    <ReactPainter
      width={width}
      height={height}
      onSave={onSave}
      initialLineWidth="5"
      render={({ triggerSave, canvas, setColor, setLineWidth }) => (
        <div>
          <Control
            className={classes.controlItem}
            onChange={(evt) => setColor(evt.target.checked ? "white" : "black")}
            type="checkbox"
            title="Ластик"
            width="13px"
            defaultValue={false}
          />

          <Control
            className={classes.controlItem}
            onChange={(evt) => setLineWidth(evt.target.value)}
            type="number"
            title="Толщина"
            width="100px"
            defaultValue={5}
          />

          <button onClick={triggerSave}>Save Canvas</button>
          <div
            style={{
              background: "white",
              width: `${width}px`,
              height: `${height}px`
            }}
          >
            {canvas}
          </div>
        </div>
      )}
    />
  );
};

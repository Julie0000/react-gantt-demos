import React, { useRef, useState } from "react";
import { getData, taskTypes } from "../data";
import { Gantt, defaultColumns } from "wx-react-gantt";
import { Field, Switch } from "../ui.js";

const data = getData();
let temp = {};

export default function GanttComponent({ skinSettings }) {
  let [edit, setEdit] = useState(true);
  let [drag, setDrag] = useState(true);
  let [order, setOrder] = useState(true);
  temp = { edit, drag, order, newLink: false }; // 固定為 false
  let gapi = useRef();

  function init(api) {
    gapi.current = api;

    api.intercept("show-editor", () => !!temp.edit);
    // api.intercept("show-editor", (ev) => {
    //   const task = api.getTask(ev.id);
    //   return temp.edit && task?.type === "progress";
    // });
    api.intercept("drag-task", () => temp.drag);
  }

  const columns = edit
    ? defaultColumns
    : defaultColumns.filter((a) => a.id !== "action");

  return (
    <div className="demo-rows">
      <div
        className="p20"
        style={{ display: "flex", flexDirection: "row", whiteSpace: "nowrap" }}
      >
        <Field label="Adding and editing" position={"left"}>
          <Switch value={edit} onChange={(e) => setEdit(e)} />
        </Field>
        <Field label="Dragging tasks" position={"left"}>
          <Switch value={drag} onChange={(e) => setDrag(e)} />
        </Field>
        <Field label="Reordering tasks" position={"left"}>
          <Switch value={order} onChange={(e) => setOrder(e)} />
        </Field>
      </div>
      <p className="p20">甘特圖上 點擊Ctrl並用滑鼠滾縮放</p>

      <div
        className={`dddddd demo-gantt ${
          !edit ? "hide-progress" : ""
        } hide-links ${!drag ? "hide-drag" : ""}`}
      >
        <Gantt
          init={init}
          {...skinSettings}
          taskTypes={taskTypes}
          tasks={data.tasks}
          links={data.links}
          scales={data.scales}
          columns={columns}
          cellWidth={100}
          zoom
        />
      </div>
    </div>
  );
}

import React, { useRef, useEffect } from "react";
import { getData } from "../data";
import { Gantt, ContextMenu } from "wx-react-gantt";

const data = getData();

const GanttComponent = ({ skinSettings }) => {
  const apiRef = useRef();
  const menuHandler = useRef();

  const toSummary = (id, self) => {
    const task = apiRef.current.getTask(id);
    if (!self) id = task.parent;

    if (id && task.type !== "summary") {
      apiRef.current.exec("update-task", {
        id,
        task: { type: "summary" },
      });
    }
  };

  const toTask = (id) => {
    const obj = apiRef.current.getTask(id);
    if (obj && !obj.data?.length) {
      apiRef.current.exec("update-task", {
        id,
        task: { type: "task" },
      });
    }
  };

  useEffect(() => {
    if (apiRef.current) {
      apiRef.current.getState().tasks.forEach((task) => {
        if (task.data?.length) {
          toSummary(task.id, true);
        }
      });

      apiRef.current.on("add-task", ({ id, mode }) => {
        if (mode === "child") toSummary(id);
      });

      apiRef.current.on("move-task", ({ id, source, mode, inProgress }) => {
        if (inProgress) return;
        if (mode === "child") toSummary(id);
        else toTask(source);
      });

      apiRef.current.on("delete-task", ({ source }) => {
        toTask(source);
      });
    }
  }, [apiRef]);

  return (
    <div onContextMenu={(ev) => menuHandler.current(ev)} className="demo-rows">
      <Gantt
        api={apiRef}
        {...skinSettings}
        tasks={data.tasks}
        links={data.links}
        scales={data.scales}
      />
      <ContextMenu
        api={apiRef.current}
        init={(v) => (menuHandler.current = v)}
      ></ContextMenu>
    </div>
  );
};

export default GanttComponent;

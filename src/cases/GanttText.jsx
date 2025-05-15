import { useRef } from "react";
import { getData } from "../data";
import { Gantt } from "wx-react-gantt";
import MyTaskContent from "../custom/MyTaskContent.jsx";

const data = getData();

export default function MyComponent({ skinSettings }) {
  const apiRef = useRef();

  return (
    <Gantt
      {...skinSettings}
      api={apiRef}
      taskTemplate={MyTaskContent}
      tasks={data.tasks}
      links={data.links}
      scales={data.scales}
    />
  );
}

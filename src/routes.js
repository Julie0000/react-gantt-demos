import BasicInit from "./cases/BasicInit.jsx";
import GanttProvider from "./cases/GanttProvider.jsx";
import GanttBatchProvider from "./cases/GanttBatchProvider.jsx";
import GanttBackend from "./cases/GanttBackend.jsx";
import GanttScales from "./cases/GanttScales.jsx";
import GanttGrid from "./cases/GanttGrid.jsx";
import GanttNoGrid from "./cases/GanttNoGrid.jsx";
import GanttFixedColumns from "./cases/GanttFixedColumns.jsx";
import GanttFlexColumns from "./cases/GanttFlexColumns.jsx";
import GanttReadOnly from "./cases/GanttReadOnly.jsx";
import GanttPreventActions from "./cases/GanttPreventActions.jsx";
import GanttFormControls from "./cases/GanttFormControls.jsx";
import GanttSizes from "./cases/GanttSizes.jsx";
import GanttMultiple from "./cases/GanttMultiple.jsx";
import GanttPerformance from "./cases/GanttPerformance.jsx";

import GanttToolbar from "./cases/GanttToolbar.jsx";
import GanttToolbarButtons from "./cases/GanttToolbarButtons.jsx";
import GanttText from "./cases/GanttText.jsx";
import GanttZoom from "./cases/GanttZoom.jsx";
import GanttCustomZoom from "./cases/GanttCustomZoom.jsx";
import GanttLengthUnit from "./cases/GanttLengthUnit.jsx";
import GanttTaskTypes from "./cases/GanttTaskTypes.jsx";
import GanttBaseline from "./cases/GanttBaseline.jsx";
import ChartCellBorders from "./cases/ChartBorders.jsx";
import ContextMenu from "./cases/ContextMenu.jsx";
import ContextMenuHandler from "./cases/ContextMenuHandler.jsx";
import ContextMenuOptions from "./cases/ContextMenuOptions.jsx";
import GanttSort from "./cases/GanttSort.jsx";
import GanttCustomSort from "./cases/GanttCustomSort.jsx";
import GanttSummariesProgress from "./cases/GanttSummariesProgress.jsx";
import GanttSummariesNoDrag from "./cases/GanttSummariesNoDrag.jsx";
import GanttSummariesConvert from "./cases/GanttSummariesConvert.jsx";
import GanttMachine from "./cases/GanttMachine.jsx";

export const links = [
  ["/machine/:skin", "Gantt Machine 測試中~~", GanttMachine],

  ["/base/:skin", "Basic Gantt", BasicInit],

  ["/sizes/:skin", "Scale / cell sizes", GanttSizes],
  ["/cell-borders/:skin", "Chart cell borders", ChartCellBorders],
  ["/scales/:skin", "Custom scales", GanttScales],

  ["/baseline/:skin", "Baselines", GanttBaseline],
  ["/templates/:skin", "Custom text", GanttText],

  ["/task-types/:skin", "Task types", GanttTaskTypes],
  [
    "/summary-progress/:skin",
    "Summary tasks with auto progress",
    GanttSummariesProgress,
  ],
  ["/summary-no-drag/:skin", "No drag for summary tasks", GanttSummariesNoDrag],
  [
    "/summary-convert/:skin",
    "Auto convert to summary tasks",
    GanttSummariesConvert,
  ],

  ["/zoom/:skin", "Zoom", GanttZoom],
  ["/custom-zoom/:skin", "Custom Zoom", GanttCustomZoom],
  ["/length-unit/:skin", "Length unit (rounding)", GanttLengthUnit],

  ["/no-grid/:skin", "No grid", GanttNoGrid],
  ["/grid-fill-space-columns/:skin", "Flexible grid columns", GanttFlexColumns],
  ["/grid-fixed-columns/:skin", "Fixed grid columns", GanttFixedColumns],
  ["/grid-custom-columns/:skin", "Custom grid columns", GanttGrid],

  ["/toolbar/:skin", "Toolbar", GanttToolbar],
  ["/toolbar-buttons/:skin", "Toolbar: limited buttons", GanttToolbarButtons],
  ["/context-menu/:skin", "Context menu", ContextMenu],
  ["/menu-handler/:skin", "Context menu: limiting options", ContextMenuHandler],
  ["/menu-options/:skin", "Context menu: custom options", ContextMenuOptions],
  ["/custom-form-controls/:skin", "Editor: custom controls", GanttFormControls],

  ["/readonly/:skin", "Readonly mode", GanttReadOnly],

  ["/prevent-actions/:skin", "Preventing actions", GanttPreventActions],
  ["/gantt-multiple/:skin", "Many Gantts per page", GanttMultiple],
  ["/performance/:skin", "Performance", GanttPerformance],

  ["/sorting/:skin", "Custom sorting", GanttSort],
  ["/sorting-api/:skin", "Sort by API", GanttCustomSort],

  ["/backend/:skin", "Backend data", GanttBackend],
  ["/backend-provider/:skin", "Saving to backend", GanttProvider],
  [
    "/backend-provider-batch/:skin",
    "Saving to backend (batch)",
    GanttBatchProvider,
  ],
];

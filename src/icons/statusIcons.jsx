import todoIcon from "./status-icons/todo-icon.svg";
import progressIcon from "./status-icons/progress-icon.svg";
import doneIcon from "./status-icons/done-icon.svg";
import cancelledIcon from "./status-icons/cancelled-icon.svg";
import backlogIcon from "./status-icons/backlog-icon.svg";

const statusIcons = {
  Todo: <img src={todoIcon} alt="todo icon" />,
  "In progress": <img src={progressIcon} alt="progress icon" />,
  Done: <img src={doneIcon} alt="done icon" />,
  Cancelled: <img src={cancelledIcon} alt="cancelled icon" />,
  Backlog: <img src={backlogIcon} alt="backlog icon" />,
};

export default statusIcons;

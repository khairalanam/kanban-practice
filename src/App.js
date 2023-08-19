import React, { useState } from "react";
import "./App.css";

// Kanban Board
import KanbanBoard from "./components/KanbanBoard";

// grouping functions
import groupByStatus from "./functions/groupByStatus";
import groupByPriority from "./functions/groupByPriority";
import groupByUser from "./functions/groupByUser";

// icons
import settingsLogo from "./icons/settings-icon.svg";
import chevronDown from "./icons/chevron-down.svg";

// effects
import useStorage from "./Effects/useStorage";
import useFetch from "./Effects/useFetch";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState("status");
  const [orderingOption, setOrderingOption] = useState("title");
  const [toggle, setToggle] = useState(false);

  useFetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment",
    setTickets,
    setUsers,
    setGroupingOption,
    setOrderingOption
  );

  useStorage(groupingOption, orderingOption);

  let groupedTickets;
  switch (groupingOption) {
    case "status":
      groupedTickets = groupByStatus(tickets);
      break;

    case "priority":
      groupedTickets = groupByPriority(tickets);
      break;

    case "user":
      groupedTickets = groupByUser(tickets, users);
      break;

    default:
      break;
  }

  return (
    <div className="app">
      {/* Display Options */}
      <div className="options">
        {/* Display button */}
        <nav>
          <button className="display-button" onClick={() => setToggle(!toggle)}>
            <img src={settingsLogo} alt="settings" className="settings-icon" />
            Display
            <img
              src={chevronDown}
              alt="chevron down"
              className="chevron-down"
            />
          </button>
        </nav>

        {/* Display Settings */}
        <div className={`dropdowns ${toggle ? "" : "hidden"}`}>
          <div>
            <h5 className="display-headings">Grouping</h5>
            <select
              className="select-dropdown"
              value={groupingOption}
              onChange={(e) => setGroupingOption(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="priority">Priority</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <h5 className="display-headings">Ordering</h5>
            <select
              className="select-dropdown"
              value={orderingOption}
              onChange={(e) => setOrderingOption(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <KanbanBoard
        groupedTickets={groupedTickets}
        orderingOption={orderingOption}
        users={users}
      />
    </div>
  );
}

export default App;

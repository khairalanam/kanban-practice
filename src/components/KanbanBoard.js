import React from "react";
import KanbanList from "./KanbanList";

const KanbanBoard = ({ groupedTickets, orderingOption, users }) => {
  return (
    <div className="kanban-board">
      {groupedTickets.map((group) => (
        <KanbanList
          key={group.title}
          title={group.title}
          tickets={group.tickets}
          orderingOption={orderingOption}
          users={users}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;

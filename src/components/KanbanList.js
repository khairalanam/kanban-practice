import React from "react";
import Ticket from "./Ticket";

const KanbanList = ({ title, icon, tickets, orderingOption, users }) => {
  const sortedTickets = [...tickets].sort((a, b) => {
    if (orderingOption === "title") {
      return a.title.localeCompare(b.title);
    } else if (orderingOption === "priority") {
      return b.priority - a.priority;
    }
    return 0;
  });

  let username;

  return (
    <div className="kanban-list">
      <div className="kanban-heading">
        {icon}
        <h3>{title}</h3>
      </div>
      {sortedTickets.map((ticket) => {
        for (let user of users) {
          if (user.id === ticket.userId) {
            username = user.name;
            break;
          }
        }
        return <Ticket key={ticket.id} ticket={ticket} user={username} />;
      })}
    </div>
  );
};

export default KanbanList;

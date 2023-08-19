import React from "react";
import priorityIcons from "../icons/priorityIcons";
import statusIcons from "../icons/statusIcons";

const Ticket = ({ ticket, user }) => {
  return (
    <section className="ticket">
      <div className="ticket-headings">
        <h3>{ticket.id}</h3>
        <h3>{user}</h3>
      </div>
      <div className="ticket-main">
        {statusIcons[ticket.status]}
        <h2 className="ticket-title">{ticket.title}</h2>
      </div>
      <div className="ticket-details">
        {priorityIcons[ticket.priority]}
        <h3>{ticket.tag[0]}</h3>
      </div>
    </section>
  );
};

export default Ticket;

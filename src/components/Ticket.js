import React from "react";

const Ticket = ({ ticket, user }) => {
  const priorityLevel = ["No Priority", "Low", "Medium", "High", "Urgent"];
  return (
    <section className="ticket">
      <div className="ticket-headings">
        <h3>{ticket.id}</h3>
        <h3>{user}</h3>
      </div>
      <h2 className="ticket-title">{ticket.title}</h2>
      <div className="ticket-details">
        <h3>{priorityLevel[ticket.priority]}</h3>
        <h3>{ticket.tag[0]}</h3>
      </div>
    </section>
  );
};

export default Ticket;

import statusIcons from "../icons/statusIcons";

const groupByStatus = (tickets) => {
  const groups = {};

  tickets.forEach((ticket) => {
    if (!groups[ticket.status]) groups[ticket.status] = [];
    groups[ticket.status].push(ticket);
  });

  return Object.keys(groups).map((status) => ({
    title: status,
    icon: statusIcons[status],
    tickets: groups[status],
  }));
};

export default groupByStatus;

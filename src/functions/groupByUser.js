import statusIcons from "../icons/statusIcons";

const groupByUser = (tickets, users) => {
  const groups = {};

  tickets.forEach((ticket) => {
    const user = users.find((user) => user.id === ticket.userId);
    const userName = user ? user.name : "Unassigned";

    if (!groups[userName]) groups[userName] = [];
    groups[userName].push(ticket);
  });

  return Object.keys(groups).map((userName) => ({
    title: userName,
    icon: statusIcons["Backlog"],
    tickets: groups[userName],
  }));
};

export default groupByUser;

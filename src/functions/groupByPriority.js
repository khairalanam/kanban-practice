import priorityIcons from "../icons/priorityIcons";

const groupByPriority = (tickets) => {
  const groups = {
    4: [],
    3: [],
    2: [],
    1: [],
    0: [],
  };

  const priorityLevel = ["No Priority", "Low", "Medium", "High", "Urgent"];

  tickets.forEach((ticket) => {
    groups[ticket.priority].push(ticket);
  });

  return Object.keys(groups).map((priority) => ({
    title: priorityLevel[priority],
    icon: priorityIcons[priority],
    tickets: groups[priority],
  }));
};

export default groupByPriority;

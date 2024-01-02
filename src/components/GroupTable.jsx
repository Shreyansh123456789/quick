import Avatar from "react-avatar";
import GroupColumn from "./GroupColumn";
import { getRandomColor } from "../utils";
import icons from "../icons";

// Function to get the list of groups based on the 'groupBy' parameter
const getGroupsList = (groupBy, tickets) => {
  if (groupBy === "status")
    return ["Backlog", "Todo", "In progress", "Done", "Canceled"];
  if (groupBy === "priority") return [0, 1, 2, 3, 4];

  const groupsSet = new Set();
  tickets.forEach((ticket) =>
    groupsSet.add(ticket[groupBy === "user" ? "userId" : groupBy])
  );
  const groupList = Array.from(groupsSet);
  groupList.sort();
  return groupList;
};

// Function to map group labels and icons based on 'groupBy' and 'users' data
const mapGroupLabelsAndIcons = (groupBy, value, users) => {
  if (groupBy === "priority") {
    const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
    return {
      label: priorityLabels[value],
      icon: icons[value] || "",
    };
  } else if (groupBy === "user") {
    const user = users.find((user) => user.id === value);
    return {
      label: user.name,
      icon: (
        <Avatar
          size="20"
          round={true}
          textSizeRatio={1.75}
          color="black"
          name={user.name}
        />
      ),
    };
  } else {
    return {
      label: value,
      icon: icons[value] || "",
    };
  }
};

// Function to sort tickets based on 'sortBy' and 'groupBy' parameter
const sortTickets = (tickets, groupBy, sortBy) => {
  tickets.sort((a, b) => {
    let propertyA = sortBy === "priority" ? a.priority : a.title.toUpperCase();
    let propertyB = sortBy === "priority" ? b.priority : b.title.toUpperCase();
    if (
      groupBy === "priority" ||
      (sortBy === "priority" && propertyA === propertyB)
    ) {
      propertyA = a.title.toUpperCase();
      propertyB = b.title.toUpperCase();
    }

    if (sortBy === "title" && propertyA === propertyB) {
      propertyA = a.priority;
      propertyB = b.priority;
    }

    if (propertyA < propertyB) {
      return -1;
    }
    if (propertyA > propertyB) {
      return 1;
    }
    return 0;
  });
  return tickets;
};

// Function to group and assign tickets to their respective groups
const groupAndAssignTickets = (tickets, groupBy, groups, users) => {
  tickets.forEach((ticket) => {
    ticket.userName = users.find((user) => user.id === ticket.userId).name;
    if (groupBy === "priority")
      groups
        .find((group) => group.value === ticket.priority)
        ?.tickets.push(ticket);
    else if (groupBy === "user")
      groups
        .find((group) => group.value === ticket.userId)
        ?.tickets.push(ticket);
    else if (groupBy === "status")
      groups
        .find((group) => group.value === ticket.status)
        ?.tickets.push(ticket);
  });
};

// Main function that orchestrates the grouping, sorting, and data transformation
const getGroups = (groupBy, tickets, users, sortBy) => {
  if (!tickets) return [];
  if (groupBy === "user" && !users) return [];

  const groupsList = getGroupsList(groupBy, tickets);

  const groups = groupsList.map((value) => {
    const { label, icon } = mapGroupLabelsAndIcons(groupBy, value, users);
    return {
      value,
      label,
      icon,
      tickets: [],
    };
  });

  const sortedTickets = sortTickets(tickets, groupBy, sortBy);

  groupAndAssignTickets(sortedTickets, groupBy, groups, users);

  return groups;
};

const GroupTable = ({ tickets, groupBy, users, sortBy }) => {
  return (
    <div style={groupTableStyle}>
      {getGroups(groupBy, tickets, users, sortBy).map((group) => (
        <GroupColumn group={group} />
      ))}
    </div>
  );
};

const groupTableStyle = {
  margin: "30px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gap: "30px",
};

export default GroupTable;

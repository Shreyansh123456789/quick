import React from "react";
import Avatar from "react-avatar";
import icons from "../icons";
import { getRandomColor } from "../utils";

const Ticket = ({ ticket }) => {
  return (
    <div style={ticketContainerStyle}>
      <div style={headerStyle}>
        <span style={idStyle}>{ticket.id}</span>
        <span style={avatarStyle}>
          <Avatar
            size="20"
            round={true}
            textSizeRatio={1.75}
            color={getRandomColor(ticket.userName)}
            name={ticket.userName}
          />
        </span>
      </div>

      <div style={contentContainerStyle}>
        <span style={iconStyle}>{icons[ticket.status]}</span>
        <p style={titleStyle}>
          {ticket.title.length > 40
            ? ticket.title.slice(0, 40) + "..."
            : ticket.title}
        </p>
      </div>

      <div style={tagsContainerStyle}>
        <span style={iconStyle}>{icons[ticket.priority]}</span>
        <div style={tagsStyle}>
          {ticket.tag.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles for the ticket container
const ticketContainerStyle = {
  fontSize: "0.8rem",
  border: "0.5px solid grey",
  background: "white",
  padding: "15px 20px",
  margin: "20px 0",
  borderRadius: "8px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const idStyle = {
  fontWeight: "bold",
  color: "grey",
};

const avatarStyle = {
  display: "inline-block",
  verticalAlign: "middle",
};

const contentContainerStyle = {
  display: "flex",
  alignItems: "center",
  margin: "5px 0 10px",
  gap: "5px",
};

const iconStyle = {
  display: "inline-block",
  verticalAlign: "middle",
};

const titleStyle = {
  fontWeight: "bold",
  height: "1.6rem",
};

const tagsContainerStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.7rem",
  gap: "5px",
};

const tagsStyle = {
  fontWeight: "bold",
  color: "grey",
  border: "0.1px solid grey",
  borderRadius: "3px",
  padding: "3px",
};

export default Ticket;

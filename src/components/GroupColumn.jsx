import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import TicketsList from "./TicketList";

const GroupColumn = ({ group }) => {
  return (
    <div style={columnStyle}>
      <div style={headerStyle}>
        <div style={groupInfoStyle}>
          <span style={iconContainerStyle}>{group.icon}</span>
          <span style={labelStyle}>{group.label}</span>
          <span style={ticketCountStyle}>{group.tickets.length}</span>
        </div>
        <div style={actionsStyle}>
          <AiOutlinePlus />
          <BsThreeDots />
        </div>
      </div>
      <TicketsList tickets={group.tickets} />
    </div>
  );
};

const columnStyle = {
  width: "100%",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const groupInfoStyle = {
  fontSize: "0.8rem",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
};

const iconContainerStyle = {
  margin: "0 10px",
  height: "20px",
  width: "20px",
};

const labelStyle = {
  verticalAlign: "middle",
};

const ticketCountStyle = {
  margin: "0 20px",
  color: "grey",
};

const actionsStyle = {
  display: "flex",
  gap: "5px",
};

export default GroupColumn;

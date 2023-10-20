import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import TicketsList from './TicketList';

const GroupColumn = ({ group }) => {
    return (
        <div style={columnStyle}>
            <div style={headerStyle}>
                {/* Group Information Section */}
                <div style={groupInfoStyle}>
                    <span style={iconContainerStyle}>
                        {group.icon}
                    </span>
                    <span style={labelStyle}>{group.label}</span>
                    <span style={ticketCountStyle}>{group.tickets.length}</span>
                </div>
                {/* Actions Section */}
                <div style={actionsStyle}>
                    <AiOutlinePlus />
                    <BsThreeDots />
                </div>
            </div>
            <TicketsList tickets={group.tickets} />
        </div>
    );
}

// Styles for the main container
const columnStyle = {
    width: '100%',
};

// Styles for the header section
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

// Styles for the group information section
const groupInfoStyle = {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
};

// Styles for the icon container
const iconContainerStyle = {
    margin: '0 10px',
    height: '20px',
    width: '20px',
};

// Styles for the group label
const labelStyle = {
    verticalAlign: 'middle',
};

// Styles for the ticket count
const ticketCountStyle = {
    margin: '0 20px',
    color: 'grey',
};

// Styles for the actions section
const actionsStyle = {
    display: 'flex',
    gap: '5px',
};

export default GroupColumn;

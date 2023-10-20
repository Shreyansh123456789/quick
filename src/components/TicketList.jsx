import Ticket from "./Ticket";

const TicketList = ({ tickets }) => {
    return (
        <div
            style={{
                margin: "30px 0"
            }}
        >
            {tickets.map((ticket) => <Ticket ticket={ticket} />)}
        </div>
    )
}

export default TicketList;
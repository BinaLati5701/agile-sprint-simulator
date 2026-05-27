import TicketCard from './TicketCard'

function BoardColumn({ title, column, tickets }) {

  return (
    <div className="ado-column">

      <div className="ado-column-title">
        {title}
      </div>

      {tickets
        .filter(ticket => ticket.column === column)
        .map(ticket => (
          <TicketCard
            key={ticket.id}
            id={ticket.id}
            type={ticket.type}
            title={ticket.title}
            state={ticket.state}
          />
      ))}

    </div>
  )
}

export default BoardColumn
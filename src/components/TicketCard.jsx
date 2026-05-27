function TicketCard({ id, type, title, state }) {
  return (
    <div className="ado-card">
      <strong>{id}</strong> {type}
      <p>{title}</p>
      <small>State • {state}</small>
    </div>
  )
}

export default TicketCard
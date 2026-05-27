function Sidebar({ page, setPage }) {
  return (
    <aside className="sidebar">
      <h2>AgileFlow</h2>

      <p className={page === "dashboard" ? "active" : ""} onClick={() => setPage("dashboard")}>
        Dashboard
      </p>

      <p className={page === "board" ? "active" : ""} onClick={() => setPage("board")}>
        Sprint Board
      </p>

      <p className={page === "planning" ? "active" : ""} onClick={() => setPage("planning")}>
        Planning
      </p>

      <p className={page === "retrospective" ? "active" : ""} onClick={() => setPage("retrospective")}>
        Retrospective
      </p>

      <p className={page === "standup" ? "active" : ""} onClick={() => setPage("standup")}>
        Standup
      </p>
    </aside>
  )
}

export default Sidebar
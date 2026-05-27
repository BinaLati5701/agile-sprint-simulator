import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MetricCard from './components/MetricCard'
import TicketCard from './components/TicketCard'

function App() {

  const [page, setPage] = useState("dashboard")

  const [tickets, setTickets] = useState([
    {
      id: "716",
      type: "US-X",
      title: "Login API validation",
      state: "New",
      column: "todo"
    },

    {
      id: "718",
      type: "US-Z",
      title: "Write SQL validation queries",
      state: "New",
      column: "todo"
    },

    {
      id: "721",
      type: "DEV-Z",
      title: "Build dashboard UI automation",
      state: "In Progress",
      column: "progress"
    },

    {
      id: "729",
      type: "QA-X",
      title: "Validate bug report flow",
      state: "QA Testing",
      column: "qa testing"
    },

    {
      id: "730",
      type: "DOC-X",
      title: "Prepare sprint demo notes",
      state: "Done",
      column: "done"
    }
  ])

  const moveTicket = (id, newColumn, newState) => {

    setTickets(
      tickets.map(ticket =>
        ticket.id === id
          ? { ...ticket, column: newColumn, state: newState }
          : ticket
      )
    )
  }

  return (

    <div className="app">

      <Sidebar page={page} setPage={setPage} />

      <main className="main">

        <div className="topbar">

          <div className="breadcrumbs">
            chamindac / DeltaBank / Boards / Sprints
          </div>

          <div className="sprint-dates">
            July 13 - July 26
          </div>

        </div>

        <h1>Agile Sprint Simulator</h1>

        <p className="subtitle">
          Practice sprint planning, QA handoff, testing, and retrospectives.
        </p>

        <section className="cards">

          <div className="card">
            <MetricCard title="Current Sprint" value="Sprint 12" />
          </div>

          <div className="card">
            <MetricCard title="Story Points" value="34 / 42" />
          </div>

          <div className="card">
            <MetricCard title="Open Bugs" value="7" />
          </div>

          <div className="card">
            <MetricCard title="Completed" value="81%" />
          </div>

        </section>

        <h2>Sprint Board</h2>

        <div className="board-header">

          <div className="board-tabs">

            <span className="tab active-tab">Taskboard</span>
            <span className="tab">Backlog</span>
            <span className="tab">Capacity</span>

            <button className="new-item-btn">
              + New Work Item
            </button>

            <button className="column-btn">
              Column Options
            </button>

            <select className="sprint-select">
              <option>Sprint 1</option>
              <option>Sprint 2</option>
              <option>Sprint 3</option>
            </select>

          </div>

        </div>

        <section className="ado-board">

          <div className="ado-column">

            <div className="ado-column-title">
              To Do
            </div>

            {tickets
              .filter(ticket => ticket.column === "todo")
              .map(ticket => (

                <div key={ticket.id}>

                  <TicketCard
                    id={ticket.id}
                    type={ticket.type}
                    title={ticket.title}
                    state={ticket.state}
                  />

                  <button
                    onClick={() =>
                      moveTicket(
                        ticket.id,
                        "progress",
                        "In Progress"
                      )
                    }
                  >
                    Move →
                  </button>

                </div>
            ))}

          </div>

          <div className="ado-column">

            <div className="ado-column-title">
              In Progress
            </div>

            {tickets
              .filter(ticket => ticket.column === "progress")
              .map(ticket => (

                <div key={ticket.id}>

                  <TicketCard
                    id={ticket.id}
                    type={ticket.type}
                    title={ticket.title}
                    state={ticket.state}
                  />

                  <button
                    onClick={() =>
                      moveTicket(
                        ticket.id,
                        "qa testing",
                        "QA Testing"
                      )
                    }
                  >
                    Move →
                  </button>

                </div>
            ))}

          </div>

          <div className="ado-column">

            <div className="ado-column-title">
              QA Testing
            </div>

            {tickets
              .filter(ticket => ticket.column === "qa testing")
              .map(ticket => (

                <div key={ticket.id}>

                  <TicketCard
                    id={ticket.id}
                    type={ticket.type}
                    title={ticket.title}
                    state={ticket.state}
                  />

                  <button
                    onClick={() =>
                      moveTicket(
                        ticket.id,
                        "done",
                        "Done"
                      )
                    }
                  >
                    Move →
                  </button>

                </div>
            ))}

          </div>

          <div className="ado-column">

            <div className="ado-column-title">
              Done
            </div>

            {tickets
              .filter(ticket => ticket.column === "done")
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

        </section>

      </main>

    </div>
  )
}

export default App
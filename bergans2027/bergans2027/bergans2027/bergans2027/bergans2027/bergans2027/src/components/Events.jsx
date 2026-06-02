import React from 'react'
import { useNavigate } from 'react-router-dom'
import eventsData from '../data/events.json'

function Card({ item, onClick }) {
  return (
    <div className="dress-card" onClick={onClick} style={{ cursor: 'pointer' }}>

      <div className="dress-image">
        <img src={item.photo} alt={item.name} />
      </div>

      <div className="dress-info">
        <div className="dress-name">{item.name}</div>
        <div className="dress-name">{item.date}</div>

        <button
          className="enter-btn"
          onClick={(e) => {
            e.stopPropagation()
            onClick()
          }}
        >
          View
        </button>

      </div>

    </div>
  )
}

export default function Events() {
  const navigate = useNavigate()
  const events = Array.isArray(eventsData) ? eventsData : []

  return (
    <div className="page-container">

      <h1>Events</h1>

      <div className="suit">
        <div className="dress-grid">

          {events.map((item) => (
            <Card
              key={item.name + item.link}
              item={item}
              onClick={() => navigate(item.link)}
            />
          ))}

        </div>
      </div>

    </div>
  )
}
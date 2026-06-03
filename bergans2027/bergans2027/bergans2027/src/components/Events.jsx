import React from 'react'
import { useNavigate } from 'react-router-dom'
import eventsData from '../data/events.json'

function formatDate(dateStr) {
  if (!dateStr) return null

  // 🔥 Force LOCAL timezone interpretation (not UTC)
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)

  const monthName = date.toLocaleString('en-US', { month: 'long' })
  const dayNum = date.getDate()
  const yearNum = date.getFullYear()

  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return 'th'
    switch (n % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }

  return `${monthName} ${dayNum}${getOrdinal(dayNum)}, ${yearNum}`
}

function Card({ item, onClick }) {
  return (
    <div className="dress-card" onClick={onClick} style={{ cursor: 'pointer' }}>

      <div className="dress-image">
        <img src={import.meta.env.BASE_URL + item.photo} alt={item.name} />
      </div>

      <div className="dress-info">
        <div className="dress-name">{item.name}</div>
        <div className="dress-name">{formatDate(item.date)}</div>

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
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ title, image, description, path }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(path)
  }

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-info">
        <div className="card-role">{title}</div>

        <div className="card-image">
          <img src={import.meta.env.BASE_URL + image} alt={title} />
        </div>

        <div className="subtitle">{description}</div>

        <button
          className="pink-btn"
          onClick={(e) => {
            e.stopPropagation()
            handleClick()
          }}
        >
          View
        </button>
      </div>
    </div>
  )
}

export default function Wedding() {
  return (
    <div className="page-container">

      <h1>Wedding Weekend</h1>

      <div className="grid2">

        <Card
          title="Rehearsal"
          image="/images/events/VenueSign.png"
          description="Rehearsal schedule"
          path="/wedding/rehearsal"
        />
        <Card
          title="Schedule"
          image="/images/events/Venue.png"
          description="Day of schedule"
          path="/wedding/weddingday"
        />

      </div>

    </div>
  )
}
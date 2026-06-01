import React from 'react'
import groomsmenData from '../../data/groomsmen/groomsmenInfo.json'

function initialsOf(name) {
  if (!name) return ''
  return name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
}

// The image url needs to be src={import.meta.env.BASE_URL + member.photo} when launched
function GroomsmenCard({ member }) {
  return (
    <div className="wedding-party-card">

      <div className="avatar">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="avatar-img"
          />
        ) : (
          initialsOf(member.name)
        )}
      </div>

      <div className="card-content">

        <div className="name">{member.name}</div>

        {member.role && (
          <div className="role">{member.role}</div>
        )}

        {member.description && (
          <div className="description">{member.description}</div>
        )}

      </div>

    </div>
  )
}

export default function GroomsmensInfo() {
  const data = Array.isArray(groomsmenData) ? groomsmenData : []

  return (
    <div className="wedding-party-wrapper">
      <div className="wedding-party-grid">
        {data.map((member) => (
          <GroomsmenCard key={member.name} member={member} />
        ))}
      </div>

    </div>
  )
}
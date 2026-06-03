import React from 'react'
import bridesmaidsData from '../../../data/bridesmaids/bridesmaidsInfo.json'

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
function BridesmaidCard({ member }) {
  return (
    <div className="wedding-party-card">

      <div className="avatar">
        {member.photo ? (
          <img
            src={import.meta.env.BASE_URL + member.photo}
            alt={member.name}
            className="avatar-img"
          />
        ) : (
          initialsOf(member.name)
        )}
      </div>

      <div className="card-info">
        <div className="card-name">{member.name}</div>
        {member.role && (
          <div className="card-role">{member.role}</div>
        )}
        {member.description && (
          <div className="card-description">{member.description}</div>
        )}
      </div>
    </div>
  )
}

export default function BridesmaidsInfo() {
  const data = Array.isArray(bridesmaidsData) ? bridesmaidsData : []

  return (
    <div className="grid2">
      {data.map((member) => (
        <BridesmaidCard key={member.name} member={member} />
      ))}
    </div>
  )
}
import React from 'react'
import timelineData from '../data/timeline.json'

/* -----------------------------
   FORMAT: July 31st, 2026
------------------------------ */
function formatDate(dateStr) {
  if (!dateStr) return null

  const date = new Date(dateStr)

  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()

  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return 'th'
    switch (n % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }

  return `${month} ${day}${getOrdinal(day)}, ${year}`
}

/* -----------------------------
   COUNTDOWN LOGIC
------------------------------ */
function getStatus(dateStr) {
  if (!dateStr) return null

  const eventDate = new Date(dateStr)
  const now = new Date()

  eventDate.setHours(0, 0, 0, 0)
  now.setHours(0, 0, 0, 0)

  const diff = eventDate - now

  if (diff < 0) return { status: 'past' }
  return { status: 'future', diff }
}

function formatCountdown(ms) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24))

  const months = Math.floor(days / 30)
  const remainingDays = days % 30

  if (months > 0) {
    return `${months} mo, ${remainingDays} days`
  }
  return `${days} days`
}

/* -----------------------------
   FORMAT TIMELINE TEXT
------------------------------ */
function formatEvent(item) {
  const startDate = item['start-date']
  const startTime = item['start-time']
  const endDate = item['end-date']
  const endTime = item['end-time']

  const startDateFmt = formatDate(startDate)
  const endDateFmt = formatDate(endDate)

  const hasEnd = endDate && endDate.trim() !== ''
  const sameDay = startDate === endDate

  if (!hasEnd) {
    return `${startDateFmt}${startTime ? ` @ ${startTime}` : ''}`
  }

  if (sameDay) {
    return `${startDateFmt} @ ${startTime} → ${endTime}`
  }

  return `${startDateFmt} @ ${startTime} → ${endDateFmt} @ ${endTime}`
}

export default function Timeline() {
  const timeline = Array.isArray(timelineData) ? timelineData : []

  if (!timeline.length) {
    return <div style={{ padding: 40 }}>No timeline data</div>
  }

  return (
    <div className="timeline-wrapper">

      <div className="timeline">
        {timeline.map((item, index) => {

          const startDate = item['start-date']
          const status = getStatus(startDate)

          return (
            <div className="timeline-row" key={index}>

              {/* DATE COLUMN */}
              <div className="timeline-time">
                {formatDate(startDate)}
              </div>

              {/* DOT + LINE */}
              <div className="timeline-line-wrap">
                <span className="timeline-dot" />
                <span className="timeline-line" />
              </div>

              {/* CONTENT */}
              <div className="timeline-content">

                {/* EVENT NAME */}
                <div className="timeline-event">
                  {item.event}
                </div>

                {/* DATE/TIME RANGE */}
                <div className="timeline-subtext">
                  {formatEvent(item)}
                </div>

                {/* STATUS (COUNTDOWN / COMPLETE) */}
                <div className="timeline-status">
                  {status?.status === 'past' && (
                    <span className="status-complete">
                      Complete ✓
                    </span>
                  )}

                  {status?.status === 'future' && (
                    <span className="status-countdown">
                      Starts in {formatCountdown(status.diff)}
                    </span>
                  )}
                </div>

                {/* NOTE */}
                {item.note && (
                  <div className="timeline-note">
                    {item.note}
                  </div>
                )}

              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
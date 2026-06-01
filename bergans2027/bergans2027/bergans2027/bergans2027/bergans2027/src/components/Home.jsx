import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import timelineData from '../data/timeline.json'

function Card({ title, description, path }) {
    const navigate = useNavigate()

    return (
        <div className="home-card" onClick={() => navigate(path)}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="enter-btn">Enter</button>
        </div>
    )
}

// ---- helper: parse your date format safely ----
function parseDate(item) {
    const start = item["start-date"]
    const time = item["start-time"] || "12:00 PM"
    return new Date(`${start} ${time}`)
}

function getNextEvent() {
    const now = new Date()

    const upcoming = timelineData
        .map(item => ({
            ...item,
            dateObj: parseDate(item)
        }))
        .filter(item => item.dateObj > now)
        .sort((a, b) => a.dateObj - b.dateObj)

    return upcoming[0] || null
}

// ---- countdown hook ----
function useCountdown(targetDate) {
    const [timeLeft, setTimeLeft] = useState({})

    useEffect(() => {
        if (!targetDate) return

        const interval = setInterval(() => {
            const now = new Date()
            const diff = targetDate - now

            if (diff <= 0) {
                setTimeLeft(null)
                return
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [targetDate])

    return timeLeft
}

export default function Home() {
    const nextEvent = getNextEvent()
    const countdown = useCountdown(nextEvent?.dateObj)

    return (
        <div className="home-wrapper">

            {/* HERO */}
            <div className="home-hero">
                <h1>The Bergans Wedding</h1>
                <p className="home-subtitle">
                    Everything you need — schedule, attire, and wedding party info.
                </p>
            </div>

            {/* ⏳ COUNTDOWN */}
            {nextEvent && countdown && (
                <div className="countdown-banner">
                    <h2>Next Up: {nextEvent.event}</h2>
                    <p>
                        {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                    </p>
                </div>
            )}

            {/* NAVIGATION GRID */}
            <div className="home-grid">

                <Card
                    title="Events"
                    description="Schedule, locations, and important wedding weekend details."
                    path="/events"
                />

                <Card
                    title="Bridesmaids"
                    description="Attire, checklist, and wedding party information."
                    path="/bridesmaids"
                />

                <Card
                    title="Groomsmen"
                    description="Attire, checklist, and wedding party information."
                    path="/groomsmen"
                />

                <Card
                    title="Timeline"
                    description="Wedding Countdown & milestones"
                    path="/timeline"
                />

            </div>

        </div>
    )
}
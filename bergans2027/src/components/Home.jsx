import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import timelineData from '../data/timeline.json'

function Card({ title, description, path }) {
    const navigate = useNavigate()

    return (
        <div className="card" onClick={() => navigate(path)}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="pink-btn">Enter</button>
        </div>
    )
}

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

            {/* Page Title */}
            <div className="home-hero">
                <img className='MN-Logo' src={import.meta.env.BASE_URL + '/images/MNLogo.png'} alt='M and N logo'/>
                <h1>The Bergans Wedding</h1>
                <p className="subtitle">
                    Everything you need — schedule, attire, and wedding party info.
                </p>
            </div>

            {/* Countdown */}
            {nextEvent && countdown && (
                <div className="countdown-banner">
                    <h2>Next Up: {nextEvent.event}</h2>
                    <p>
                        {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                    </p>
                </div>
            )}

            {/* NAVIGATION GRID */}
            <h1>What to Wear</h1>
            <div className="grid2">

                <Card
                    title="Bridesmaids"
                    path="/bridesmaids"
                />

                <Card
                    title="Groomsmen"
                    path="/groomsmen"
                />

                <Card
                    title="Parents of the Bride"
                    path="/brides-parents"
                />

                <Card
                    title="Parents of the Groom"
                    path="/grooms-parents"
                />

            </div>

            {/* NAVIGATION GRID */}
            <h1>Wedding Events</h1>
            <div className="grid2">
                <Card
                    title="Bach"
                    description="Schedule, locations, and important bach weekend details."
                    path="/bach"
                />
                <Card
                    title="Wedding Weekend"
                    description="Rehearsal plan and wedding schedule."
                    path="/wedding"
                />
            </div>

        </div>
    )
}
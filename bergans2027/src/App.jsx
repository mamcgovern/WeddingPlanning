import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'

import Home from './components/Home.jsx'
import Events from './components/Events.jsx'
import Bach from './components/events/Bach.jsx'
import Rehearsal from './components/events/Rehearsal.jsx'
import WeddingDay from './components/events/WeddingDay.jsx'
import Bridesmaids from './components/Bridesmaids.jsx'
import Groomsmen from './components/Groomsmen.jsx'
import Timeline from './components/Timeline.jsx'

export default function App() {
    return (
        <>
            <Header />

            <main className="page-container py-4">
                <Routes>
                    {/* Home */}
                    <Route path="/" element={<Home />} />

                    {/* Events */}
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/bach" element={<Bach />} />
                    <Route path="/events/rehearsal" element={<Rehearsal />} />
                    <Route path="/events/wedding" element={<WeddingDay />} />

                    {/* Bridesmaids */}
                    <Route path="/bridesmaids" element={<Bridesmaids />} />

                    {/* Groomsmen */}
                    <Route path="/groomsmen" element={<Groomsmen />} />

                    {/* Timeline */}
                    <Route path="/timeline" element={<Timeline />} />
                </Routes>
            </main>
        </>
    )
}
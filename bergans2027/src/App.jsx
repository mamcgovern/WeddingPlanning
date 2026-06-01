import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'

import Home from './components/Home.jsx'
import Events from './components/Events.jsx'
    import Bach from './components/events/Bach.jsx'
    import Rehearsal from './components/events/Rehearsal.jsx'
    import WeddingDay from './components/events/WeddingDay.jsx'
import Bridesmaids from './components/Bridesmaids.jsx'
    import BridesmaidAttire from './components/bridesmaids/BridesmaidAttire.jsx'
    import BridesmaidChecklist from './components/bridesmaids/BridesmaidChecklist.jsx'
import Groomsmen from './components/Groomsmen.jsx'
    import GroomsmenAttire from './components/groomsmen/GroomsmenAttire.jsx'
    import GroomsmenChecklist from './components/groomsmen/GroomsmenChecklist.jsx'

export default function App() {
    return (
        <>
            <Header />

            <main className="page-container py-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                        <Route path="/events/bach" element={<Bach />} />
                        <Route path="/events/rehearsal" element={<Rehearsal />} />
                        <Route path="/events/wedding" element={<WeddingDay />} />
                    <Route path="/bridesmaids" element={<Bridesmaids />} />
                        <Route path="/bridesmaids/attire" element={<BridesmaidAttire />} />
                        <Route path="/bridesmaids/checklist" element={<BridesmaidChecklist />} />
                    <Route path="/groomsmen" element={<Groomsmen />} />
                        <Route path="/groomsmen/attire" element={<GroomsmenAttire />} />
                        <Route path="/groomsmen/checklist" element={<GroomsmenChecklist />} />
                    <Route path="/wedding-day" element={<WeddingDay />} />
                </Routes>
            </main>
        </>
    )
}
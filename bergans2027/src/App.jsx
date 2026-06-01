import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './components/Home.jsx'
import Events from './components/Events.jsx'
    import Bach from './components/events/Bach.jsx'
    import Rehearsal from './components/events/Rehearsal.jsx'
    import WeddingDay from './components/events/WeddingDay.jsx'
import WeddingParty from './components/WeddingParty.jsx'
    import Parents from './components/weddingParty/Parents.jsx'
    import Bridesmaids from './components/weddingParty/Bridesmaids.jsx'
    import Groomsmen from './components/weddingParty/Groomsmen.jsx'
import Timeline from './components/Timeline.jsx'
import Processional from './components/Processional.jsx'
import Links from './components/Links.jsx'


export default function App() {
    return (
        <>
            <ScrollToTop />

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

                    {/* Wedding Party */}
                    <Route path="/weddingparty" element={<WeddingParty />} />
                    <Route path="/weddingparty/parents" element={<Parents />} />
                    <Route path="/weddingparty/bridesmaids" element={<Bridesmaids />} />
                    <Route path="/weddingparty/groomsmen" element={<Groomsmen />} />

                    {/* Timeline */}
                    <Route path="/timeline" element={<Timeline />} />

                    {/* Processional */}
                    <Route path="/processional" element={<Processional />} />

                    {/* Links */}
                    <Route path="/links" element={<Links />} />
                </Routes>
            </main>
        </>
    )
}
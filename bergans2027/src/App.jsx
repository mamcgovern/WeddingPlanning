import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './components/Home.jsx'

// Bach
import Bach from './components/Bach.jsx'

// Wedding Party
import BridesParents from './components/weddingParty/parents/BridesFamily.jsx'
import GroomsParents from './components/weddingParty/parents/GroomsFamily.jsx'
import Bridesmaids from './components/weddingParty/Bridesmaids.jsx'
import Groomsmen from './components/weddingParty/Groomsmen.jsx'

// Wedding Weekend
import Wedding from './components/Wedding.jsx'
import Rehearsal from './components/wedding/Rehearsal.jsx'
import WeddingDay from './components/wedding/WeddingDay.jsx'

// Links
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

                    {/* Bach */}
                    <Route path="/bach" element={<Bach />} />

                    {/* Wedding Party */}
                    <Route path="/brides-parents" element={<BridesParents />} />
                    <Route path="/grooms-parents" element={<GroomsParents />} />
                    <Route path="/bridesmaids" element={<Bridesmaids />} />
                    <Route path="/groomsmen" element={<Groomsmen />} />

                    {/* Wedding */}
                    <Route path="/wedding" element={<Wedding />} />
                    <Route path="/wedding/rehearsal" element={<Rehearsal />} />
                    <Route path="/wedding/weddingday" element={<WeddingDay />} />

                    {/* Links */}
                    <Route path="/links" element={<Links />} />

                </Routes>
            </main>
        </>
    )
}
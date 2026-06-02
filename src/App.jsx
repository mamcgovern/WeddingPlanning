import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './components/Home.jsx'

// Bach
import Bach from './components/Bach.jsx'

// Wedding Party
import WeddingParty from './components/WeddingParty.jsx'
import Parents from './components/weddingParty/Parents.jsx'
import Bridesmaids from './components/weddingParty/Bridesmaids.jsx'
import Groomsmen from './components/weddingParty/Groomsmen.jsx'

// Wedding Weekend
import Wedding from './components/Wedding.jsx'
import Rehearsal from './components/wedding/Rehearsal.jsx'
import WeddingDay from './components/wedding/WeddingDay.jsx'
import Processional from './components/wedding/Processional.jsx'

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
                    <Route path="/weddingparty" element={<WeddingParty />} />
                    <Route path="/weddingparty/parents" element={<Parents />} />
                    <Route path="/weddingparty/bridesmaids" element={<Bridesmaids />} />
                    <Route path="/weddingparty/groomsmen" element={<Groomsmen />} />

                    {/* Wedding */}
                    <Route path="/wedding" element={<Wedding />} />
                    <Route path="/wedding/rehearsal" element={<Rehearsal />} />
                    <Route path="/wedding/weddingday" element={<WeddingDay />} />
                    <Route path="/wedding/processional" element={<Processional />} />

                    {/* Links */}
                    <Route path="/links" element={<Links />} />

                </Routes>
            </main>
        </>
    )
}
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'

import Home from './components/Home.jsx'
import Bach from './components/Bach.jsx'
import Bridesmaids from './components/Bridesmaids.jsx'
import Groomsmen from './components/Groomsmen.jsx'
import WeddingDay from './components/WeddingDay.jsx'

export default function App() {
    return (
        <>
            <Header />

            <main className="page-container py-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bach" element={<Bach />} />
                    <Route path="/bridesmaids" element={<Bridesmaids />} />
                    <Route path="/groomsmen" element={<Groomsmen />} />
                    <Route path="/wedding-day" element={<WeddingDay />} />
                </Routes>
            </main>
        </>
    )
}
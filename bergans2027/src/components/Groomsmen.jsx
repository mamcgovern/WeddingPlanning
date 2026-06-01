import React from 'react'
import { Link } from 'react-router-dom'
import GroomsmenInfo from './groomsmen/GroomsmenInfo'
import GroomsmenAttire from './groomsmen/GroomsmenAttire'
import GroomsmenChecklist from './groomsmen/GroomsmenChecklist'

export default function Groomsmens() {
    return (
        <div className="container">
            <h1>Groomsmen</h1>

            <p className="subtitle">
                Meet the groomsmen and find everything you need for the wedding day.
            </p>

            <h2>Meet the Men</h2>
            <GroomsmenInfo />
            <hr></hr>

            <h2>Attire</h2>
            <GroomsmenAttire />
            <hr></hr>

            <h2>Checklist</h2>
            <GroomsmenChecklist />

        </div>
    )
}
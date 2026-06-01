import React from 'react'
import { Link } from 'react-router-dom'
import BridesmaidInfo from './bridesmaids/BridesmaidsInfo'
import BridesmaidAttire from './bridesmaids/BridesmaidAttire'
import BridesmaidChecklist from './bridesmaids/BridesmaidChecklist'

export default function Bridesmaids() {
    return (
        <div className="container">
            <h1>Bridesmaids</h1>

            <p className="subtitle">
                Meet the bridesmaids and find everything you need for the wedding day.
            </p>
            
            <h2>Meet the Maids</h2>
            <BridesmaidInfo />
            <hr></hr>

            <h2>Attire</h2>
            <BridesmaidAttire />
            <hr></hr>

            <h2>Checklist</h2>
            <BridesmaidChecklist />

        </div>
    )
}
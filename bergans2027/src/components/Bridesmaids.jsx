import React from 'react'
import { Link } from 'react-router-dom'

export default function Bridesmaids() {
    return (
        <div className="container">
            <h1>Bridesmaids</h1>

            <p className="mb-4">
                Meet the bridesmaids and find everything you need for the wedding day.
            </p>

            <div className="list-group">
                <Link
                    to="/bridesmaids"
                    className="list-group-item list-group-item-action"
                >
                    Overview
                </Link>

                <Link
                    to="/bridesmaids/attire"
                    className="list-group-item list-group-item-action"
                >
                    Attire
                </Link>
            </div>
        </div>
    )
}
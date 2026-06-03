import React from 'react'

function RoleCard(role, name) {
    return (
        <div className="card">
            <div className="card-info">
                <div className="card-role">{role}</div>
                <div className="card-name">{name}</div>
            </div>
        </div>
    )
}

function Card(names) {
    return (
        <div className="card">
            <div className="card-info">
                <div className="card-name">{names}</div>
            </div>
        </div>
    )
}

export default function Processional() {
    return (
        <div>
            <h1>Processional</h1>
            <div className='song'>"Forever and Ever, Amen" by Randy Travis</div>
            <div>
                <h2>Officiant</h2>
                {Card("Dr. Beth Hartmann")}
            </div>
            <div>
                <h2>Parents</h2>
                {RoleCard("Parents of the Groom", "Jeff and Sharyn Bergan")}
                {RoleCard("Mother of the Bride", "Paula McGovern")}
            </div>
            <div>
                <h2>Groom</h2>
                {Card("Nicholas Bergan")}
            </div>
            <div>
                <h2>Wedding Party</h2>
                {RoleCard("Best Man", "Nathan Wilson")}
                {Card("John Anderson and Henry Hayes")}
                {Card("Kay McGovern and Toph McGovern")}
                {Card("Mary McGovern and Damien McGovern")}
                {Card("Emily Curry and Sam Bergan")}
                {Card("Taylor Bergan and Quentin Kelso")}
                {Card("Lizzy Cardey and Kurt Cardey")}
                {RoleCard("Maid of Honor", "Sydni Edgington")}
            </div>
            <div>
                <h2>Flower Girl & Ring Bearer</h2>
                {RoleCard("Flower Girl", "Nori Bergan")}
                {RoleCard("Ring Bearer", "George McGovern")}
            </div>
            <div className='song'>"Love Story" by Taylor Swift</div>
            <div>
                <h2>Bride & Father of the Bride</h2>
                {Card("Maddelynne and Fred McGovern")}
            </div>
        </div>
    )
}
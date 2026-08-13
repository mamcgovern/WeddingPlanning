import { useState } from "react";
import OutfitCard from "../../components/OutfitCard";
import OutfitDisplay from "../../components/outfits/OutfitDisplay";
import weddingParty from "../../data/weddingParty";

function OutfitAssignments() {
    const [searchTerm, setSearchTerm] = useState("");

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const matchingPeople = normalizedSearch
        ? weddingParty.filter((person) =>
            person.name.toLowerCase().includes(normalizedSearch)
        )
        : [];

    return (
        <main>
            <section className="page-intro">
                <p className="eyebrow">Attire Assignments</p>
                <h1>Find Your Outfit</h1>
                <p>
                    Enter your first or last name to find your assigned
                    wedding attire and purchase information.
                </p>
            </section>

            <section className="outfit-search">
                <div className="search-box">
                    <label htmlFor="party-member-search">
                        Search by name
                    </label>

                    <div className="search-box__input-wrapper">
                        <span className="search-box__icon" aria-hidden="true">
                            🔍
                        </span>

                        <input
                            id="party-member-search"
                            type="search"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Enter your first or last name"
                        />
                    </div>
                </div>

                <div className="outfit-results" aria-live="polite">
                    {normalizedSearch && matchingPeople.length === 0 && (
                        <p>
                            We couldn’t find that name. Check the spelling or
                            contact Maddie.
                        </p>
                    )}

                    {matchingPeople.map((person) => (
                        <div className="outfit-result" key={person.id}>
                            <div className="outfit-result__person">
                                <p className="eyebrow">{person.role}</p>
                                <h2>{person.name}</h2>
                            </div>

                            <OutfitDisplay outfitId={person.outfitId} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default OutfitAssignments;
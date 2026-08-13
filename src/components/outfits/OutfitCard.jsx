import { Link } from "react-router-dom";

function OutfitCard({ name, title, color, image }) {
    return (
        <article className="outfit-card" key={image}>
            <p
                className={`dress-color dress-color--${color
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
            >
                {name}
            </p>

            <img src={image} alt={title} />

            <div className="outfit-card__content centered">
                <h3 className="centered">
                    {title ?? "Outfit not selected yet"}
                </h3>
            </div>
        </article>
    );
}

export default OutfitCard;
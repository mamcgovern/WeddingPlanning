function OutfitCard({ person, outfit }) {
  if (!outfit) {
    return (
      <article className="outfit-card">
        <h2>{person.name}</h2>
        <p>Outfit information has not been added yet.</p>
      </article>
    );
  }

  return (
    <article className="outfit-card">
      <p className="eyebrow">{person.role}</p>
      <h2>{person.name}</h2>

      <h3>{outfit.title}</h3>

      <dl className="outfit-details">
        <div>
          <dt>Retailer</dt>
          <dd>{outfit.retailer}</dd>
        </div>

        <div>
          <dt>Color</dt>
          <dd>{outfit.color}</dd>
        </div>

        <div>
          <dt>Shoes</dt>
          <dd>{outfit.shoes}</dd>
        </div>
      </dl>

      <p>{outfit.instructions}</p>

      {outfit.purchaseUrl ? (
        <a
          className="button"
          href={outfit.purchaseUrl}
          target="_blank"
          rel="noreferrer"
        >
          Shop Your Outfit
        </a>
      ) : (
        <p className="outfit-card__pending">
          Purchase link coming soon
        </p>
      )}
    </article>
  );
}

export default OutfitCard;
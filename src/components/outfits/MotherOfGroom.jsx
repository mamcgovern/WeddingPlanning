const dressOptions = [
  {
    id: 1,
    name: "Dress Name",
    image: "/images/outfits/sage/dress-one.jpg",
    purchaseUrl: "https://example.com",
  },
  {
    id: 2,
    name: "Dress Name",
    image: "/images/outfits/sage/dress-two.jpg",
    purchaseUrl: "https://example.com",
  },
  {
    id: 3,
    name: "Dress Name",
    image: "/images/outfits/sage/dress-three.jpg",
    purchaseUrl: "https://example.com",
  },
  {
    id: 4,
    name: "Dress Name",
    image: "/images/outfits/sage/dress-four.jpg",
    purchaseUrl: "https://example.com",
  },
];

const shoeOptions = [
  {
    id: 1,
    name: "Shoe Name",
    image: "/images/outfits/shoes/shoe-one.jpg",
    purchaseUrl: "https://example.com",
  },
  {
    id: 2,
    name: "Shoe Name",
    image: "/images/outfits/shoes/shoe-two.jpg",
    purchaseUrl: "https://example.com",
  },
];

function BridesmaidSage() {
  return (
    <div className="outfit-assignment">
      <section className="outfit-section">
        <div className="outfit-section__heading">
          <div>
            <p className="eyebrow">Your Assigned Color</p>
            <h2>Sage Green Dresses</h2>
          </div>

          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
          >
            View More Dresses
          </a>
        </div>

        <div className="product-grid">
          {dressOptions.map((dress) => (
            <article className="product-card" key={dress.id}>
              <img src={dress.image} alt={dress.name} />

              <div className="product-card__content">
                <h3>{dress.name}</h3>

                <a
                  href={dress.purchaseUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Dress
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="outfit-section">
        <div className="outfit-section__heading">
          <div>
            <p className="eyebrow">For All Bridesmaids</p>
            <h2>Nude or Tan Shoes</h2>
          </div>

          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
          >
            View More Shoes
          </a>
        </div>

        <div className="product-grid">
          {shoeOptions.map((shoe) => (
            <article className="product-card" key={shoe.id}>
              <img src={shoe.image} alt={shoe.name} />

              <div className="product-card__content">
                <h3>{shoe.name}</h3>

                <a
                  href={shoe.purchaseUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Shoes
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BridesmaidSage;
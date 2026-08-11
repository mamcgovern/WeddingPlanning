import BridesmaidShoes from "./BridesmaidShoes";

const dressOptions = [
    {
        id: 1,
        name: "Luna Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/wr-sage-chiffon-luna-reg-bridesmaid-apparel-dresses-302.jpg.webp?v=1764723232&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/luna-chiffon-dress-sage",
    },
    {
        id: 2,
        name: "Doris Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/wr-sage-chiffon-doris-reg-bridesmaid-apparel-dresses-300_826f74b8-63d8-4d6c-9a18-dc9266cac4de.jpg.webp?v=1764995878&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/doris-chiffon-dress-sage",
    },
    {
        id: 3,
        name: "Jackson Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/wr-sage-chiffon-jackson-reg-bridesmaid-apparel-dresses-100.jpg.webp?v=1764999485&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/jackson-chiffon-dress-sage",
    },
    {
        id: 4,
        name: "Jane Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/wr-sage-chiffon-jane-slit-reg-bridesmaid-apparel-dresses-100.jpg.webp?v=1764987316&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/jane-chiffon-dress-with-slit-sage",
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

                <div className="card-btn-container">
                    <a
                        href="https://www.birdygrey.com/collections/green-bridesmaid-dresses?filter.tags_fabric=chiffon&filter.tags_color_bar=sage"
                        target="_blank"
                        rel="noreferrer"
                        className="card-btn"
                    >
                        View More Dresses
                    </a>
                </div>
            </section>

            <BridesmaidShoes />
        </div>
    );
}

export default BridesmaidSage;
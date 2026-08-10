import BridesmaidShoes from "./BridesmaidShoes";

const dressOptions = [
    {
        id: 1,
        name: "Luna Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/wr-blush-pink-chiffon-luna-reg-bridesmaid-apparel-dresses-302.jpg.webp?v=1764703932&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/luna-chiffon-dress-blush-pink",
    },
    {
        id: 2,
        name: "Dorris Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_doris_convertible_bridesmaid_dress_03.jpg.webp?v=1712810320&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/doris-chiffon-dress-blush-pink",
    },
    {
        id: 3,
        name: "Jackson Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_jackson_bridesmaid_dress_02.jpg.webp?v=1689725514&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/jackson-chiffon-dress-blush-pink",
    },
    {
        id: 4,
        name: "Jane Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_jane_slit_bridesmaid_dress_01.jpg.webp?v=1757553233&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/jane-chiffon-dress-with-slit-blush-pink",
    },
];

function BridesmaidBlush() {
    return (
        <div className="outfit-assignment">
            <section className="outfit-section">
                <div className="outfit-section__heading">
                    <div>
                        <p className="eyebrow">Your Assigned Color</p>
                        <h2>Sage Green Dresses</h2>
                        Please purchase a sage dress from Birdy Grey in the chiffon material. You are welcome to choose any style dress, including (but not limited to) the dresses below.
                    </div>
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
                        href="https://www.birdygrey.com/collections/bridesmaid-dresses?filter.tags_fabric=chiffon&filter.tags_color_bar=blush+pink"
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

export default BridesmaidBlush;
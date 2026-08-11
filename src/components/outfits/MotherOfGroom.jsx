const dressOptions = [
    {
        id: 1,
        name: "Violet Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_le_fleur_violet_matte_satin_bridesmaid_dress_04.jpg.webp?v=1719022148&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/violet-chiffon-dress-sage-le-fleur",
    },
    {
        id: 2,
        name: "Kira Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/wr-sage-le-fleur-chiffon-kira-reg-bridesmaid-dress-100.jpg.webp?v=1768263008&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/kira-chiffon-dress-sage-le-fleur",
    },
    {
        id: 3,
        name: "Joyce Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_le_fleur_joyce_matte_satin_bridesmaid_dress_06.jpg.webp?v=1719020700&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/joyce-chiffon-dress-sage-le-fleur",
    },
    {
        id: 4,
        name: "Devin Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_le_fleur_devin_non_slit_bridesmaid_dress_02.jpg.webp?v=1736202312&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/devin-chiffon-dress-sage-le-fleur",
    },
];

function MotherOfGroom() {
    return (
        <div className="outfit-assignment">
            <section className="outfit-section">
                <div className="outfit-section__heading">
                    <div>
                        <p className="eyebrow">Your Assigned Color</p>
                        <h2>Sage Le Fleur Dresses</h2>
                        Please purchase a sage le fleur dress from Birdy Grey in the chiffon material. You are welcome to choose any style dress, including (but not limited to) the dresses below.
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
                        href="https://www.birdygrey.com/collections/mother-of-the-bride-and-groom-dresses?filter.tags_color_bar=sage+le+fleur"
                        target="_blank"
                        rel="noreferrer"
                        className="card-btn"
                    >
                        View More Dresses
                    </a>
                </div>
            </section>

        </div>
    );
}

export default MotherOfGroom;
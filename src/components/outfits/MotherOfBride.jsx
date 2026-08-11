const dressOptions = [
    {
        id: 1,
        name: "Violet Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/vintage_pink_floral_violet_bridesmaid_dress_07.jpg.webp?v=1707440847&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/violet-chiffon-dress-vintage-pink-floral",
    },
    {
        id: 2,
        name: "Kira Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/vintage_pink_floral_kira_slit_bridesmaid_dress_01_72ae9479-5964-41f9-8736-3ebf2af2848e.jpg.webp?v=1729094277&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/kira-chiffon-dress-vintage-pink-floral",
    },
    {
        id: 3,
        name: "Joyce Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/vintage_pink_floral_joyce_slit_bridesmaid_dress_02.jpg.webp?v=1707454558&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/joyce-chiffon-dress-vintage-pink-floral",
    },
    {
        id: 4,
        name: "Devin Dress",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/vintage_pink_floral_devin_non_slit_bridesmaid_dress_01.jpg.webp?v=1736202562&width=1200&height=1800&crop=center&quality=85",
        purchaseUrl: "https://www.birdygrey.com/products/devin-chiffon-dress-vintage-pink-floral",
    },
];

function MotherOfBride() {
    return (
        <div className="outfit-assignment">
            <section className="outfit-section">
                <div className="outfit-section__heading">
                    <div>
                        <p className="eyebrow">Your Assigned Color</p>
                        <h2>Vintage Pink Floral Dresses</h2>
                        Please purchase a vintage pink floral dress from Birdy Grey in the chiffon material. You are welcome to choose any style dress, including (but not limited to) the dresses below.
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
                        href="https://www.birdygrey.com/collections/mother-of-the-bride-and-groom-dresses?filter.tags_color_bar=vintage+pink+floral"
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

export default MotherOfBride;
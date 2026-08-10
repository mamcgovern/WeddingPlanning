const shoeOptions = [
    {
        id: 1,
        name: "Kelly & Katie Relira Pump",
        image: "https://assets.designerbrands.com/match/Site_Name/603367_262_ss_01/?quality=85&io=transform:fit,width:1280",
        purchaseUrl: "https://www.dsw.com/product/kelly-and-katie-relira-pump/603367?activeColor=262",
    },
    {
        id: 2,
        name: "Mix No. 6 Harllow Sandal",
        image: "https://assets.designerbrands.com/match/Site_Name/577401_280_ss_01/?quality=85&io=transform:fit,width:1280",
        purchaseUrl: "https://www.dsw.com/product/mix-no.-6-harllow-sandal/577401?activeColor=280",
    },
    {
        id: 3,
        name: "Naturalizer Bristol Sandal",
        image: "https://assets.designerbrands.com/match/Site_Name/486532_201_ss_01/?quality=85&io=transform:fit,width:1280",
        purchaseUrl: "https://www.dsw.com/product/naturalizer-bristol-sandal/486532?activeColor=201",
    },
    {
        id: 4,
        name: "Kelly & Katie Maurra Sandal",
        image: "https://assets.designerbrands.com/match/Site_Name/611055_210_ss_01/?quality=85&io=transform:fit,width:1280",
        purchaseUrl: "https://www.dsw.com/product/kelly-and-katie-maurra-sandal/611055?activeColor=210",
    },
];

function BridesmaidShoes() {
    return (
        <section className="outfit-section">
            <div className="outfit-section__heading">
                <div>
                    <p className="eyebrow">For All Bridesmaids</p>
                    <h2>Nude or Tan Shoes</h2>
                    The bridesmaids are welcome to wear any nude or tan dress shoe of their choice, including (but not limited to) styles similar to those shown below. Heels are not required.
                </div>
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
            <div className="card-btn-container">
                <a
                    href="https://www.dsw.com/category/womens/shoes/dress?color=Beige"
                    target="_blank"
                    rel="noreferrer"
                    className="card-btn"
                >
                    View More Shoes
                </a>
            </div>
        </section>
    );
}

export default BridesmaidShoes;
const dressOptions = [
    {
        id: 1,
        name: "Savile Tan Wool Blend Suit",
        image: "https://cdn-1.azazie.com/upimg/h65/4f/67/9f1114a4b48dbb76538dc2d868454f67.jpg.webp",
        purchaseUrl: "https://www.azazie.com/products/savile-tan-wool-blend-suit/44861641",
    },
];

const shoeOptions = [
    {
        id: 1,
        name: "Men's Nunn Bush Carmelo Plain Toe Oxford Dress Shoes",
        image: "https://cdn.media.amplience.net/s/scvl/153258_332145_SET/2?fmt=auto&$webPdpProduct$",
        purchaseUrl: "https://www.shoecarnival.com/mens_nunn_bush_carmelo_plain_toe_oxford_dress_shoes/153258.html?color=332145&objectID=153258-332145&queryId=549c79fdff749f849bdbb744ccb7ae63",
    },
    {
        id: 2,
        name: "Men's Freeman Bodie Dress Shoes",
        image: "https://cdn.media.amplience.net/s/scvl/166771_368966_SET/2?fmt=auto&$webPdpProduct$",
        purchaseUrl: "https://www.shoecarnival.com/mens_freeman_bodie_dress_shoes/166771.html?color=368966&objectID=166771-406227&queryId=1c345ed532c7ca360b2c73fdadf28fe3",
    },
];

function Fathers() {
    return (
        <div className="outfit-assignment">
            <section className="outfit-section">
                <div className="outfit-section__heading">
                    <div>
                        <h2>Suits</h2>
                        The fathers should wear a light tan suit, including the suit below.
                    </div>
                </div>

                <div className="product-grid product-grid--centered">
                    {dressOptions.map((dress) => (
                        <article className="product-card" key={dress.id}>
                            <img src={dress.image} alt={dress.name} />

                            <div className="product-card__content">
                                <h3>{dress.name}</h3>


                            </div>
                        </article>
                    ))}
                </div>

                <div className="card-btn-container">
                    <a
                        href="https://www.azazie.com/products/savile-tan-wool-blend-suit/44861641"
                        target="_blank"
                        rel="noreferrer"
                        className="card-btn"
                    >
                        View Suit
                    </a>
                </div>
            </section>

            <section className="outfit-section">
                <div className="outfit-section__heading">
                    <div>
                        <h2>Shoes</h2>
                        The fathers are welcome to wear any brown dress shoe they would like, including, but not limited to the following.
                    </div>
                </div>

                <div className="product-grid product-grid--centered">
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
                        href="https://www.shoecarnival.com/mens/dress?colorPrimary=BROWN"
                        target="_blank"
                        rel="noreferrer"
                        className="card-btn"
                    >
                        View More Shoes
                    </a>
                </div>
            </section>

            <section className="outfit-section">
                <div className="outfit-section__heading">
                    <div>
                        <h2>Accessories</h2>
                        Your tie and pocket square will be provided by the couple.
                        Please find or purchase a brown belt to match your shoes.
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Fathers;
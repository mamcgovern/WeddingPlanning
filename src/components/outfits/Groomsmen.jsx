const dressOptions = [
    {
        id: 1,
        name: "Wilke-Rodriguez Modern Fit Tic Suit - Graphite Tic",
        image: "https://image.menswearhouse.com/is/image/TMW/TMW_3BWX_75_WILKERODRIGUEZ_2_PIECE_SUITS_GRAPHITE_TIC_MAIN?imPolicy=pdp-zoom",
        purchaseUrl: "https://www.menswearhouse.com/p/modern-fit-tic-pattern-suit-tmw-3bwx?color=graphite-tic",
    },
];

const shoeOptions = [
    {
        id: 1,
        name: "Men's Nunn Bush Carmelo Plain Toe Oxford Dress Shoes",
        image: "https://cdn.media.amplience.net/s/scvl/153258_349506_SET/2?fmt=auto&$webPdpProduct$",
        purchaseUrl: "https://www.shoecarnival.com/mens_nunn_bush_carmelo_plain_toe_oxford_dress_shoes/153258.html?color=349506&objectID=153258-349506&queryId=1c345ed532c7ca360b2c73fdadf28fe3",
    },
    {
        id: 2,
        name: "Men's Freeman Bodie Dress Shoes",
        image: "https://cdn.media.amplience.net/s/scvl/166771_406227_SET/2?fmt=auto&$webPdpProduct$",
        purchaseUrl: "https://www.shoecarnival.com/mens_freeman_bodie_dress_shoes/166771.html?color=406227&objectID=166771-406227&queryId=1c345ed532c7ca360b2c73fdadf28fe3",
    },
    {
        id: 3,
        name: "Men's Freeman Marshall Cap Toe Dress Oxfords",
        image: "https://cdn.media.amplience.net/s/scvl/177646_391271_SET/2?fmt=auto&$webPdpProduct$",
        purchaseUrl: "https://www.shoecarnival.com/mens_freeman_marshall_cap_toe_dress_oxfords/177646.html?color=391271&objectID=177646-391271&queryId=1c345ed532c7ca360b2c73fdadf28fe3",
    },
    {
        id: 4,
        name: "Men's Freeman Colter Dress Shoes",
        image: "https://cdn.media.amplience.net/s/scvl/78413_147997_SET/2?fmt=auto&$webPdpProduct$",
        purchaseUrl: "https://www.shoecarnival.com/mens_freeman_colter_dress_shoes/78413.html?color=147997&objectID=78413-147997&queryId=1c345ed532c7ca360b2c73fdadf28fe3",
    },
];

function Groomsmen() {
    return (
        <div className="outfit-assignment">
            <section className="outfit-section">
                <div className="outfit-section__heading">
                    <div>
                        <h2>Suit</h2>
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
                        href="https://www.menswearhouse.com/p/modern-fit-tic-pattern-suit-tmw-3bwx?color=graphite-tic"
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
                        The groomsmen are welcome to wear any black dress shoe they would like, including, but not limited to the following.
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
                        href="https://www.shoecarnival.com/mens/dress?colorPrimary=BLACK"
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
                        <h2>Ties</h2>
                        Tie colors have been assigned to the groomsmen, and the ties were gifted as a part of the groomsmen's gift boxes.
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Groomsmen;
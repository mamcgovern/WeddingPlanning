import OutfitCard from "../../components/outfits/OutfitCard";

const BridesmaidCards = [
    {
        name: "Sydni",
        title: null,
        color: "sage",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_chiffon_dress_swatch_678bbba7-7ced-4074-a82e-236866a5bf84.jpg.webp"
    },
    {
        name: "Lizzy",
        title: null,
        color: "blush",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_chiffon_dress_swatch.jpg.webp"
    },
    {
        name: "Taylor",
        title: null,
        color: "sage",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_chiffon_dress_swatch_678bbba7-7ced-4074-a82e-236866a5bf84.jpg.webp"
    },
    {
        name: "Emily",
        title: null,
        color: "blush",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_chiffon_dress_swatch.jpg.webp"
    },
    {
        name: "Kay",
        title: "James Dusty Sage Structured Stretch Suit",
        color: "Sage",
        image: "https://cdn-1.azazie.com/upimg/h65/29/cc/a9eda66f605bf4dd406252a0b73e29cc.jpg.webp"
    },
    {
        name: "Toph",
        title: "James Dusty Rose Structured Stretch Suit",
        color: "Blush",
        image: "https://cdn-1.azazie.com/upimg/h65/48/4e/d2f9395b8819ee18b7aee48e674b484e.jpg.webp"
    },
]

const GroomsmenCards = [
    {
        name: "Nathan",
        title: "Wilke-Rodriguez Modern Fit Tic Suit & Simon Tie",
        color: "Sage",
        image: "/images/SelectedOutfits/Groomsmen/Sage.png"
    },
    {
        name: "Kurt",
        title: "Wilke-Rodriguez Modern Fit Tic Suit & Simon Tie",
        color: "Blush",
        image: "/images/SelectedOutfits/Groomsmen/Blush.png"
    },
    {
        name: "Quentin",
        title: "Wilke-Rodriguez Modern Fit Tic Suit & Simon Tie",
        color: "Sage",
        image: "/images/SelectedOutfits/Groomsmen/Sage.png"
    },
    {
        name: "Sam",
        title: "Wilke-Rodriguez Modern Fit Tic Suit & Simon Tie",
        color: "Blush",
        image: "/images/SelectedOutfits/Groomsmen/Blush.png"
    },
    {
        name: "John",
        title: "Wilke-Rodriguez Modern Fit Tic Suit & Simon Tie",
        color: "Sage",
        image: "/images/SelectedOutfits/Groomsmen/Sage.png"
    },
    {
        name: "Henry",
        title: "Wilke-Rodriguez Modern Fit Tic Suit & Simon Tie",
        color: "Blush",
        image: "/images/SelectedOutfits/Groomsmen/Blush.png"
    },
]

const ParentsCards = [
    {
        name: "Paula",
        title: null,
        color: "blush",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/vintage_pink_floral_chiffon_dress_swatch_58e2b885-5ff0-4d27-a7f6-b034d47f1d94.jpg.webp"
    },
    {
        name: "Fred",
        title: "Savile Tan Wool Blend Suit",
        color: "blush",
        image: "/images/SelectedOutfits/Fathers/Blush.png"
    },
    {
        name: "Sharyn",
        title: null,
        color: "sage",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_le_fleur_chiffon_dress_swatch_f513064f-f63b-4001-a288-8d80ceab90a0.jpg.webp"
    },
    {
        name: "Jeff",
        title: "Savile Tan Wool Blend Suit",
        color: "sage",
        image: "/images/SelectedOutfits/Fathers/Sage.png"
    },
]

function OutfitsOverview() {
    return (
        <>
            <section className="page-intro">
                <p className="eyebrow">Selected Outfits</p>
                <h1>What We're Wearing</h1>
                <p>
                    Take a look at what others are wearing to the wedding!
                </p>
            </section>

            <h2 className="section-heading">Bridesmaids</h2>
            <section className="outfit-grid">
                {BridesmaidCards.map((card) => (
                    <OutfitCard
                        key={card.image}
                        name={card.name}
                        title={card.title}
                        color={card.color}
                        image={card.image}
                    />
                ))}
            </section>

            <h2 className="section-heading">Groomsmen</h2>
            <p className="centered">All groomsmen will be wearing the same suit. Here are the tie color assignments.</p>
            <section className="outfit-grid">
                {GroomsmenCards.map((card) => (
                    <OutfitCard
                        key={card.image}
                        name={card.name}
                        title={card.title}
                        color={card.color}
                        image={card.image}
                    />
                ))}
            </section>

            <h2 className="section-heading">Parents</h2>
            <section className="outfit-grid-4">
                {ParentsCards.map((card) => (
                    <OutfitCard
                        key={card.image}
                        name={card.name}
                        title={card.title}
                        color={card.color}
                        image={card.image}
                    />
                ))}
            </section>
        </>
    );
}

export default OutfitsOverview;
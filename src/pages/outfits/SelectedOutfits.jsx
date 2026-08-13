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
        title: "Simon Tie",
        color: "Sage",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_simon_tie_1.jpg.webp?v=1741985302&width=768&height=1152&crop=center&quality=85"
    },
    {
        name: "Kurt",
        title: "Simon Tie",
        color: "Blush",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_simon_tie_1.jpg.webp?v=1741985302&width=768&height=1152&crop=center&quality=85"
    },
    {
        name: "Quentin",
        title: "Simon Tie",
        color: "Sage",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_simon_tie_1.jpg.webp?v=1741985302&width=768&height=1152&crop=center&quality=85"
    },
    {
        name: "Sam",
        title: "Simon Tie",
        color: "Blush",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_simon_tie_1.jpg.webp?v=1741985302&width=768&height=1152&crop=center&quality=85"
    },
    {
        name: "John",
        title: "Simon Tie",
        color: "Sage",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/sage_simon_tie_1.jpg.webp?v=1741985302&width=768&height=1152&crop=center&quality=85"
    },
    {
        name: "Henry",
        title: "Simon Tie",
        color: "Blush",
        image: "https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_simon_tie_1.jpg.webp?v=1741985302&width=768&height=1152&crop=center&quality=85"
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
        image: "https://cdn-1.azazie.com/upimg/h65/4f/67/9f1114a4b48dbb76538dc2d868454f67.jpg.webp"
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
        image: "https://cdn-1.azazie.com/upimg/h65/4f/67/9f1114a4b48dbb76538dc2d868454f67.jpg.webp"
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
import { COLORS } from "./colors";

export const PRICING_PLAN = [
    {
        title: "Starting Out",
        price: '$0-$20K',
        question: "What superheroes does your startup need?",
        roles: [
            "Developers + Engineers",
            "Designers",
            "Product / Project Experts",
            "Consultancy",
        ],
        bgColor: COLORS.mint,
        textColor: COLORS.primary,

    },
    {
        title: "Booming Business",
        price: '$20K-$100K',
        question: "What type of legends does your booming business need?",
        roles: [
            "Developers + Engineers",
            "Designers",
            "Product / Project Experts",
            "Consultancy",
        ],
        bgColor: COLORS.primary,
        textColor: COLORS.secondary,
        isMostPopular: true
    },
    {
        title: "Unicorn Incoming",
        price: '$100K+',
        question: "Is that a Unicorn?! What MVPs does your team need?",
        roles: [
            "Developers + Engineers",
            "Designers",
            "Product / Project Experts",
            "Consultancy",
        ],
        bgColor: COLORS.orange,
        textColor: COLORS.primary,
    },
]
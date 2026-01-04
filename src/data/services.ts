export type FeatureIcon =
    | "check"
    | "zap"
    | "rocket"
    | "message"
    | "shield";

export type ServiceIcon =
    | "laptop"
    | "code"
    | "boxes"
    | "phone";

export type BadgeKey =
    | "starter"
    | "popular"
    | "business";

export type ServicePlan = {
    slug: string;
    nombre: string;
    price: {
        original: {
            pen: string;
            usd: string;
        };
        offer?: {
            pen: string;
            usd: string;
            note?: string;
        };
    };

    featured: boolean;

    icon: ServiceIcon;
    badgeKey?: BadgeKey;
    highlight?: boolean;

    features: {
        icon: FeatureIcon;
        textKey:
        | "responsive"
        | "seoBasic"
        | "seoAdvanced"
        | "speed"
        | "contact"
        | "custom"
        | "automation"
        | "scale"
        | "support"
        | "android"
        | "ios"
        | "marketing";
    }[];

    cta: {
        type: "contact" | "services";
    };
};

export const servicesData: Record<"es" | "en", ServicePlan[]> = {
    es: [
        {
            slug: "landing-page",
            nombre: "Landing Page Profesional",
            price: {
                original: {
                    pen: "S/ 799",
                    usd: "≈ $215 USD",
                },
                offer: {
                    pen: "S/ 599",
                    usd: "≈ $189 USD",
                    note: "Precio de lanzamiento",
                },
            },

            featured: true,
            icon: "laptop",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "responsive" },
                { icon: "zap", textKey: "seoBasic" },
                { icon: "rocket", textKey: "speed" },
                { icon: "message", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },

        {
            slug: "web-corporativa",
            nombre: "Web Corporativa",
            price: {
                original: {
                    pen: "S/ 1,799",
                    usd: "≈ $510 USD",
                },
                offer: {
                    pen: "S/ 1,699",
                    usd: "≈ $450 USD",
                    note: "Más solicitado",
                },
            },
            featured: true,
            icon: "code",
            badgeKey: "popular",
            highlight: true,
            features: [
                { icon: "check", textKey: "responsive" },
                { icon: "zap", textKey: "seoAdvanced" },
                { icon: "rocket", textKey: "speed" },
                { icon: "message", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },

        {
            slug: "aplicaciones-moviles",
            nombre: "Aplicaciones Móviles",
            price: {
                original: {
                    pen: "Desde S/ 5,500",
                    usd: "≈ $1,500 USD",
                },
                offer: {
                    pen: "Desde S/ 4,500",
                    usd: "≈ $1,250 USD",
                },
                note: "Precio de lanzamiento",
            },
            featured: true,
            icon: "phone",
            badgeKey: "business",
            features: [
                { icon: "check", textKey: "custom" },
                { icon: "rocket", textKey: "android" },
                { icon: "rocket", textKey: "ios" },
                { icon: "shield", textKey: "support" },
            ],
            cta: { type: "services" },
        },

        {
            slug: "marketing-digital",
            nombre: "Marketing Digital",
            price: {
                original: {
                    pen: "S/ 899 / mes",
                    usd: "≈ $215 USD",
                },
                offer: {
                    pen: "S/ 799 / mes",
                    usd: "≈ $200 USD",
                },
                note: "Precio de lanzamiento",
            },
            featured: true,
            icon: "boxes",
            badgeKey: "starter",
            features: [
                { icon: "zap", textKey: "marketing" },
                { icon: "rocket", textKey: "seoAdvanced" },
                { icon: "message", textKey: "contact" },
                { icon: "shield", textKey: "support" },
            ],
            cta: { type: "contact" },
        },

        {
            slug: "software-medida",
            nombre: "Software a Medida",
            price: {
                original: {
                    pen: "Desde S/ 8,000",
                    usd: "≈ $2,150 USD",
                },
                offer: {
                    pen: "Desde S/ 6,500",
                    usd: "≈ $1,500 USD",
                },
                note: "Precio de lanzamiento",
            },
            featured: false,
            icon: "boxes",
            badgeKey: "business",
            features: [
                { icon: "check", textKey: "custom" },
                { icon: "zap", textKey: "automation" },
                { icon: "rocket", textKey: "scale" },
                { icon: "shield", textKey: "support" },
            ],
            cta: { type: "services" },
        },
    ],

    en: [
        {
            slug: "landing-page",
            nombre: "Professional Landing Page",
            price: {
                original: {
                    pen: "S/ 799",
                    usd: "≈ $215 USD",
                },
                offer: {
                    pen: "S/ 699",
                    usd: "≈ $189 USD",
                },
                note: "Launch offer",
            },
            featured: true,
            icon: "laptop",
            badgeKey: "starter",
            features: [
                { icon: "check", textKey: "responsive" },
                { icon: "zap", textKey: "seoBasic" },
                { icon: "rocket", textKey: "speed" },
                { icon: "message", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },

        {
            slug: "corporate-web",
            nombre: "Corporate Website",
            price: {
                original: {
                    pen: "S/ 1,899",
                    usd: "≈ $510 USD",
                },
                offer: {
                    pen: "S/ 1,699",
                    usd: "≈ $450 USD",
                },
                note: "Launch offer",
            },
            featured: true,
            icon: "code",
            badgeKey: "popular",
            highlight: true,
            features: [
                { icon: "check", textKey: "responsive" },
                { icon: "zap", textKey: "seoAdvanced" },
                { icon: "rocket", textKey: "speed" },
                { icon: "message", textKey: "contact" },
            ],
            cta: { type: "contact" },
        },

        {
            slug: "mobile-apps",
            nombre: "Mobile Applications",
            price: {
                original: {
                    pen: "From S/ 6,500",
                    usd: "≈ $1,750 USD",
                },
                offer: {
                    pen: "From S/ 5,500",
                    usd: "≈ $1,500 USD",
                },
                note: "Launch offer",
            },
            featured: true,
            icon: "phone",
            badgeKey: "business",
            features: [
                { icon: "check", textKey: "custom" },
                { icon: "rocket", textKey: "android" },
                { icon: "rocket", textKey: "ios" },
                { icon: "shield", textKey: "support" },
            ],
            cta: { type: "services" },
        },

        {
            slug: "digital-marketing",
            nombre: "Digital Marketing",
            price: {
                original: {
                    pen: "S/ 699 / month",
                    usd: "≈ $189 USD",
                },
                offer: {
                    pen: "S/ 699 / month",
                    usd: "≈ $189 USD",
                },
                note: "Launch offer",
            },
            featured: true,
            icon: "boxes",
            badgeKey: "starter",
            features: [
                { icon: "zap", textKey: "marketing" },
                { icon: "rocket", textKey: "seoAdvanced" },
                { icon: "message", textKey: "contact" },
                { icon: "shield", textKey: "support" },
            ],
            cta: { type: "contact" },
        },
    ],
};
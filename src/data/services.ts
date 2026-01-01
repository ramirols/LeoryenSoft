export type ServicePlan = {
    slug: string;
    nombre: string;
    price: string;
    featured: boolean;
};

export const servicesData: Record<"es" | "en", ServicePlan[]> = {
    es: [
        {
            slug: "landing-page",
            nombre: "Landing Page",
            price: "$199 USD",
            featured: true,
        },
        {
            slug: "web-corporativa",
            nombre: "Web Corporativa",
            price: "$499 USD",
            featured: true,
        },
        {
            slug: "software-medida",
            nombre: "Software a medida",
            price: "Desde $999",
            featured: true,
        },
        {
            slug: "aplicaciones-moviles",
            nombre: "Aplicaciones móviles",
            price: "Desde $995",
            featured: true,
        },
    ],
    en: [
        {
            slug: "landing-page",
            nombre: "Landing Page",
            price: "$199 USD",
            featured: true,
        },
        {
            slug: "corporate-web",
            nombre: "Web Corporate",
            price: "$499 USD",
            featured: true,
        },
        {
            slug: "custom-software",
            nombre: "Custom Software",
            price: "From $995",
            featured: true,
        },
        {
            slug: "mobile-apps",
            nombre: "Mobile Apps",
            price: "From $995",
            featured: true,
        },
    ],
};
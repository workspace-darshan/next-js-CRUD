import { getBaseUrl } from "@/utils/Constant";

const defaultKeywords =
    "CRUD application, Next.js web application, MongoDB database, Node.js backend, Tailwind CSS styling, User management system, Data management, Real-time updates, Responsive dashboard, Secure authentication, User roles and permissions, Data visualization, Search functionality, Filter and sort capabilities, Form validation, RESTful API, Database operations, Create records, Read records, Update records, Delete records, Data pagination, User interface, Modern web development, Frontend development, Backend development, Database integration, API endpoints, Data security, User experience, Mobile-friendly interface, Performance optimization, Error handling, Data backup, Audit trails, User activity logging, Custom dashboard, Report generation, Data export, Import functionality, Secure data storage, Cross-platform compatibility, Scalable architecture";

export const createMetadata = ({
    pageTitle,
    title,
    description,
    keywords,
    url,
    imageUrl,
    imageWidth,
    imageHeight,
    imageAlt,
    isHomePage,
    ogImage = '',
}) => {
    const baseUrl = getBaseUrl();

    return {
        title: isHomePage ? pageTitle : `${pageTitle} | CRUD Dashboard`,
        description: description ?? "A modern CRUD application built with Next.js, Node.js, MongoDB, and Tailwind CSS. Manage your data efficiently with our intuitive dashboard.",
        keywords: keywords ?? defaultKeywords,
        openGraph: {
            title: title ?? "CRUD Dashboard",
            description: description ?? "A modern CRUD application built with Next.js, Node.js, MongoDB, and Tailwind CSS. Manage your data efficiently with our intuitive dashboard.",
            url: url ?? baseUrl,
            siteName: "CRUD Dashboard",
            images: [
                {
                    url: imageUrl ?? `${baseUrl}${ogImage}`,
                    width: imageWidth ?? 1200,
                    height: imageHeight ?? 630,
                    alt: imageAlt ?? "CRUD Dashboard Preview",
                    type: "image/jpeg",
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title ?? "CRUD Dashboard",
            description: description ?? "A modern CRUD application built with Next.js, Node.js, MongoDB, and Tailwind CSS. Manage your data efficiently with our intuitive dashboard.",
            images: [imageUrl ?? `${baseUrl}${ogImage}`],
        },
        robots: {
            index: true,
            follow: true,
        },
        metadataBase: new URL(baseUrl),
    };
};
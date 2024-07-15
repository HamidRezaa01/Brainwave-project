

type NavigationItems = {
    id: number
    title: string
    url: string
    onlyMobile: boolean
}

export const navigationItems: NavigationItems[] =
    [
        { id: 0, title: "Features", url: "#features", onlyMobile: false },
        { id: 1, title: "Pricing", url: "#pricing", onlyMobile: false },
        { id: 2, title: "How to use", url: "#how-to-use", onlyMobile: false },
        { id: 3, title: "Roadmap", url: "#roadmap", onlyMobile: false },
        { id: 4, title: "New account", url: "#signup", onlyMobile: true },
        { id: 5, title: "Sign in", url: "#login", onlyMobile: true },
    ]

type Benefits = {
    id: string
    title: string
    text: string
    backgroundUrl: string
    iconUrl: string
    imageUrl: string
    light: boolean
}

export const benefits: Benefits[] = [
    {
        id: "0",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: "./src/assets/benefits/icon-1.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: false,
    },
    {
        id: "1",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: "./src/assets/benefits/icon-2.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: true,
    },
    {
        id: "2",
        title: "Connect everywhere",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: "./src/assets/benefits/icon-3.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: false,
    },
    {
        id: "3",
        title: "Fast responding",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: "./src/assets/benefits/icon-4.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: true,
    },
    {
        id: "4",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: "./src/assets/benefits/icon-1.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: false,
    },
    {
        id: "5",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: "./src/assets/benefits/icon-2.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: false,
    },
];
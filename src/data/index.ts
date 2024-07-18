
// Navigation

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


// benefits

type Benefits = {
    id: number
    title: string
    text: string
    backgroundUrl: string
    iconUrl: string
    imageUrl: string
    light: boolean
}

export const benefits: Benefits[] = [
    {
        id: 0,
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: "./src/assets/benefits/icon-1.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: false,
    },
    {
        id: 1,
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: "./src/assets/benefits/icon-2.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: true,
    },
    {
        id: 2,
        title: "Connect everywhere",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: "./src/assets/benefits/icon-3.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: false,
    },
    {
        id: 3,
        title: "Fast responding",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: "./src/assets/benefits/icon-4.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: true,
    },
    {
        id: 4,
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: "./src/assets/benefits/icon-1.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: false,
    },
    {
        id: 5,
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: "./src/assets/benefits/icon-2.svg",
        imageUrl: "./src/assets/benefits/image-2.png",
        light: false,
    },
];

// Collabration

type CollabContent = {
    id: number
    title: string
}
  
export const collabContent: CollabContent[] = [
    {
      id: 0,
      title: "Seamless Integration",
    },
    {
      id: 1,
      title: "Smart Automation",
    },
    {
      id: 2,
      title: "Top-notch Security",
    },
  ]

//CollabApps

type CollabApps = {
    id: number
    title: string
    icon: string
    width: number
    height: number

}

export const collabApps: CollabApps [] = [
    {
      id: 0,
      title: "Figma",
      icon: './src/assets/collaboration/figma.png',
      width: 26,
      height: 36,
    },
    {
      id: 1,
      title: "Notion",
      icon: './src/assets/collaboration/notion.png',
      width: 34,
      height: 36,
    },
    {
      id: 2,
      title: "Discord",
      icon: './src/assets/collaboration/discord.png',
      width: 36,
      height: 28,
    },
    {
      id: 3,
      title: "Slack",
      icon: './src/assets/collaboration/slack.png',
      width: 34,
      height: 35,
    },
    {
      id: 4,
      title: "Photoshop",
      icon: './src/assets/collaboration/photoshop.png',
      width: 34,
      height: 34,
    },
    {
      id: 5,
      title: "Protopie",
      icon: './src/assets/collaboration/protopie.png',
      width: 34,
      height: 34,
    },
    {
      id: 6,
      title: "Framer",
      icon: './src/assets/collaboration/framer.png',
      width: 26,
      height: 34,
    },
    {
      id: 7,
      title: "Raindrop",
      icon: './src/assets/collaboration/raindrop.png',
      width: 38,
      height: 32,
    },
  ];


// Brainwave-Services

type BrainwaveServices = {
  id: number
  title: string
}

export const brainwaveServices: BrainwaveServices [] = [
  {
    id: 0,
    title:"Photo generating"
  },
  {
    id: 1,
    title:"Photo enhance"
  },
  {
    id: 2,
    title:"Seamless Integration"
  },
];

// Pricing

type Pricing = {
  id: number
  title: string
  description: string
  price: number | null
  features: string[]
}

  
export const pricing: Pricing [] = [
  {
    id: 0,
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: 1,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: 1,
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: 9.99,
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: 2,
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];
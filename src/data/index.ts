
type NavigationItems = {
    id: number
    title: string
    url: string
    onlyMobile: boolean
}

export const navigationItems: NavigationItems[] = 
    [
        {id: 0, title: "Features", url: "#features", onlyMobile: false},
        {id: 1, title: "Pricing", url: "#pricing", onlyMobile: false},
        {id: 2, title: "How to use", url: "#how-to-use", onlyMobile: false},
        {id: 3, title: "Roadmap", url: "#roadmap", onlyMobile: false},
        {id: 4, title: "New account", url: "#signup", onlyMobile: true},
        {id: 5, title: "Sign in", url: "#login", onlyMobile: true},
   ]
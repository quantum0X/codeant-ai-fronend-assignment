import {
    Home,
    Settings,
    CodeXml,
    Cloud,
    BookText,
} from "lucide-react";

const navbarMenus = [
    {
        icon: <Home className="w-5 h-5" />,
        title: "Repositories",
        link: "/#",
        isActive: true,
    },
    {
        icon: <CodeXml className="w-5 h-5" />,
        title: "AI Code Review",
        link: "/#",
        isActive: false,
    },
    {
        icon: <Cloud className="w-5 h-5" />,
        title: "Cloud Security",
        link: "/#",
        isActive: false,
    },
    {
        icon: <BookText className="w-5 h-5" />,
        title: "How to Use",
        link: "/#",
        isActive: false,
    },
    {
        icon: <Settings className="w-5 h-5" />,
        title: "Settings",
        link: "/#",
        isActive: false,
    },
];

export { navbarMenus };
import { SectionTitle } from "../comon/SectionTitle";
import { ProjectCard } from "../comon/ProjectCard"; // ajuste o caminho conforme sua estrutura

export function Projects() {
    const projects = [
        {
            title: "Cluyverth Web",
            description: "Cluyverth Web is my personal portfolio website, designed to clearly showcase my skills and projects in full-stack web development.",
            techs: ["React", "Vite", "TypeScript", "TailwindCSS", "C#", ".NET"],
            image: "/Projects/Cluyverth-Portfolio.png",
            liveUrl: "https://cluyverth.com",
            githubUrl: "https://github.com/Cluyverth/Cluyverth-Web"
        },
        {
            title: "KumoHabit",
            description: "A user-friendly digital tool created to guide language learners in building consistent study habits. Track your fluency progress.",
            techs: ["Next.js", "TypeScript", "TailwindCSS", "Python", "Django", "PostgreSQL"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "https://github.com/Cluyverth/kumohabit"
        },
        {
            title: "GakuStay",
            description: "Platform designed to assist international students in finding ideal and trustworthy housing options near Japanese language schools throughout Japan.",
            techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "C#", ".NET Core", "SQL Server"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "https://github.com/Cluyverth/gakustay"
        },
        {
            title: "BookBloom",
            description: "Application designed to help readers discover incredible new books through personalized recommendations and a vibrant community of fellow book lovers.",
            techs: ["Next.js", "TypeScript", "TailwindCSS", "NestJS", "MongoDB"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "https://github.com/Cluyverth/bookbloom"
        },
         {
            title: "WordVault",
             description: "A powerful application utilizing spaced repetition techniques to enable efficient and long-lasting memorization of vocabulary for language learners.",
             techs: ["Next.js", "TypeScript", "TailwindCSS", "Python", "Django", "PostgreSQL"],
             image: "/Projects/UnderConstruction.png",
             liveUrl: "#",
             githubUrl: "https://github.com/Cluyverth/wordvault"
         },
          {
             title: "MacroMagic",
             description: " An intuitive application developed to create personalized diet plans based on individual goals and specific macronutrient requirements.",
             techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Python", "Django", "PostgreSQL"],
             image: "/Projects/UnderConstruction.png",
             liveUrl: "#",
             githubUrl: "https://github.com/Cluyverth/macromagic"
         },
        // {
        //     title: "Flash Polls",
        //     description: "A fast and interactive polling tool designed for streamers and live chats. Instantly create and share polls without login for your audience.",
        //     techs: ["Next.js", "TypeScript", "TailwindCSS", "NestJS", "WebSockets", "Redis", "PostgreSQL"],
        //     image: "/Projects/UnderConstruction.png",
        //     liveUrl: "#",
        //     githubUrl: "#"
        // },
        {
            title: "Stupid Spin",
            description: "A fun and absurd online spinning wheel where users pay a small fee to spin and receive a randomly generated fortune or ridiculous message. A gamified, luck-based experiment for entertainment.",
            techs: ["Next.js", "TypeScript", "TailwindCSS", "NestJS", "PostgreSQL"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "https://github.com/Cluyverth/stupidspin"
        },
        // {
        //     title: "FinScan",
        //     description: "An AI-powered app that allows users to upload invoices or receipts, extracting important data such as date, value, and taxes. Perfect for personal or business finance management.",
        //     techs: ["Next.js", "TypeScript", "TailwindCSS", "Python", "Django", "OCR", "PostgreSQL"],
        //     image: "/Projects/UnderConstruction.png",
        //     liveUrl: "#",
        //     githubUrl: "#"
        // },
        // {
        //     title: "FBuddy",
        //     description: "A personalized menstrual tracker where users can input their partner's or friend's cycle data to receive notifications about mood, fertility, and even gift suggestions.",
        //     techs: ["Next.js", "TypeScript", "TailwindCSS", "Python", "Django", "PostgreSQL"],
        //     image: "/Projects/UnderConstruction.png",
        //     liveUrl: "#",
        //     githubUrl: "#"
        // }
        // outros projetos...
    ];

    return (
        <main>
            <div className="min-h-screen flex items-center justify-center mb-20 mt-22">
                <div className="mx-w-5xl mx-auto px-4">
                    <SectionTitle title="Projects" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

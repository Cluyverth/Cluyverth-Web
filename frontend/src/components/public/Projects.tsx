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
            techs: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "GakuStay",
            description: "Platform designed to assist international students in finding ideal and trustworthy housing options near Japanese language schools throughout Japan.",
            techs: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "BookBloom",
            description: "Application designed to help readers discover incredible new books through personalized recommendations and a vibrant community of fellow book lovers.",
            techs: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "WordVault",
            description: "A powerful application utilizing spaced repetition techniques to enable efficient and long-lasting memorization of vocabulary for language learners.",
            techs: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "MacroMagic",
            description: " An intuitive application developed to create personalized diet plans based on individual goals and specific macronutrient requirements.",
            techs: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
            image: "/Projects/UnderConstruction.png",
            liveUrl: "#",
            githubUrl: "#"
        },
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

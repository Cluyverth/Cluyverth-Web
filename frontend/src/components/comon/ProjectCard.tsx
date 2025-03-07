import { Link } from "react-router";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PillList } from "./PillList";

interface Project {
    title: string;
    description: string;
    techs: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="p-6 rounded-xl border border-[var(--color-primary)]/70 hover:-translate-y-1 hover:border-[var(--color-primary)]/90 hover:shadow-lg transition-all max-w-md mx-auto">
            <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl text-[var(--color-base-content-strong)] font-bold mb-2">{project.title}</h3>
            <p className="text-base-content mb-4">{project.description}</p>
            
            {/* Renderizando as tecnologias do projeto com PillList */}
            <div className="mb-4">
                <PillList skills={{ "Technologies": project.techs }} />
            </div>

            <div className="flex justify-between items-center">
                <Link
                    to={project.liveUrl}
                    className="flex items-center text-[var(--color-base-content-strong)] hover:text-[var(--color-primary)]"
                    target="_blank"
                >
                    <FaExternalLinkAlt className="mr-2" />
                    View Project
                </Link>
                <Link
                    to={project.githubUrl}
                    className="flex items-center text-[var(--color-base-content-strong)] hover:text-[var(--color-primary)]"
                    target="_blank"
                >
                    <FaGithub className="mr-2" />
                    GitHub
                </Link>
            </div>
        </div>
    );
}

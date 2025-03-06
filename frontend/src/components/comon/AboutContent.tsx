import BoldText from "./BoldText"
import { ContentParagraph } from "./ContentParagraph"
import { PillList } from "./PillList"
import { SectionTitle } from "./SectionTitle"

export function AboutContent() {
    const skillsData = {
        "Programming Languages": ["C#", "Python", "TypeScript", "JavaScript"],
        "Frameworks & Libraries": [".NET", "Next.js", "React", "Django", "Vue", "Pandas", "Polars", "UV"],
        "Databases": ["SQL Server", "PostgreSQL", "MongoDB"],
        "Tools & Technologies": ["TailwindCSS", "Bootstrap", "Vite"]
    }

    return (
        <>
            <div className="rounded-xl mb-6 p-8 border border-[var(--color-border)] hover:-translate-y-1 transition-all">
                <ContentParagraph>
                    <BoldText text="Full-Stack Developer" /> with experience in building
                    <BoldText text=" scalable" />,
                    <BoldText text=" high-impact" /> solutions.
                    Working as a Product Owner, leveraging business insights and my knowledge in Python to enhance the development process.
                    Specializing in <BoldText text="Software Engineering" /> and continuously evolving through projects
                    to tackle real-world challenges, using technologies like
                    <BoldText text=" C#" />,
                    <BoldText text=" Python" />,
                    <BoldText text=" TypeScript" />, and
                    <BoldText text=" JavaScript" />.
                </ContentParagraph>

                <p className="text-[var(--color-text-secondary)] mb-6">
                    Creator of the VS Code theme <BoldText href="https://github.com/Cluyverth/NightFall-Pines" text="@NightFall-Pines" />,
                    along with the projects <BoldText href="https://www.youtube.com/@Byakkott" text="@PROJETOA" />, <BoldText href="https://www.youtube.com/@Byakkott" text="@PROJETOB" />, and <BoldText href="https://www.youtube.com/@Byakkott" text="@PROJETOC" />.
                </p>

                <p className="text-[var(--color-text-secondary)] mb-6">
                    Outside of development, I share content on
                    <BoldText href="https://www.youtube.com/@Byakkott" text=" @Byakkott" />,
                    my YouTube channel, dive into outdoor activities like
                    <BoldText text=" calisthenics" /> and
                    <BoldText text=" extreme sports" />, or immerse myself in
                    <BoldText text=" MMORPGs" />,
                    <BoldText text=" RPGs" />,
                    <BoldText text=" strategy games" />, and more.
                </p>
                <PillList hidden_sm={true} skills={skillsData} />
            </div>
            
            <div>
                <SectionTitle hidden_md_lg={true} title="Skills" />
                <div className="block sm:hidden rounded-xl p-8 border border-[var(--color-border)] hover:-translate-y-1 transition-all">
                    <PillList skills={skillsData} />
                </div>
            </div>
        </>
    )
}

import { AboutContent } from "../comon/AboutContent"
import { Education } from "../comon/Education"
import { SectionTitle } from "../comon/SectionTitle"
import { WorkExperience } from "../comon/WorkExperience"


export function About() {
    const workExperienceData = [
        {
            title: "Product Owner",
            company: "Companhia Excelsior de Seguros",
            period: "2024 - Present",
            description: "Prioritizing the continuous development of services, focusing on features and requirements that maximize business value while balancing effort and risk.\nCollaborating with teams to create, refine, and manage the Product Backlog.\nTesting, validating, and approving developed items in each sprint.\nStrategically aligning priority changes across all involved areas.\nSupporting stakeholders by understanding their needs, analyzing challenges, and defining clear solutions."
        },
        {
            title: "Project Assistant",
            company: "Companhia Excelsior de Seguros",
            period: "2023 - 2024",
            description: "Developed a Python automation that reduced weekly report generation time from 1 day to 15 minutes, significantly improving process efficiency.\nAnalyzed data, scenarios, behaviors, and anomalies, generating reports as needed.\nAssisted in project development and department-specific initiatives.\nMaintained an up-to-date knowledge base on deadlines and responsibilities."
        },
        {
            title: "Project and Process Intern",
            company: "Companhia Excelsior de Seguros",
            period: "2022 - 2023",
            description: "Prepared and validated legacy payment data worth approximately R$10 million, ensuring a smooth migration and integration into the company's new system. This transition reduced costs, improved reporting, and enabled faster data visualization.\nContributed to project development and department-specific initiatives, optimizing process efficiency.\nAssisted the project team by automating report generation with Python, streamlining business processes."
        },
        // ... outros trabalhos
    ]

    const educationData = [
        {
            degree: "Specialization in Software Engineering",
            institution: "PUC Minas",
            period: "2024–2025",
            topics: [
                { title: "Software Quality Assurance", description: "" },
                { title: "Cloud Solutions", description: "" },
                { title: "DevOps Practices", description: "" },
                { title: "Mobile Application Architecture", description: "" },
                { title: "UX/UI Design", description: "" },
                // ... outros tópicos
            ]
        },
        {
            degree: "B.S. in Control & Automation Engineering",
            institution: "Wyden",
            period: "2016–2022",
            topics: [
                { title: "Electrical Project:", description: "Electrical design for a clothing store - (Mar 2021)." },
                { title: "Temperature Control:", description: "PID prototype - (Feb 2020)." },
                { title: "Digital Thermometer:", description: "Prototype in C - (Feb 2019)." }
                // ... outros tópicos
            ]
        },
        // ... outras formações
    ]

    return (
        <main>
            <div className="min-h-screen flex items-center justify-center mb-20 mt-22">
                <div className="max-w-3xl mx-auto px-4">
                    <SectionTitle title="About Me" />
                    <AboutContent />

                    <div className="grid grid-cols-1 gap-6 mt-8">
                        <div className="space-y-8">
                            <SectionTitle title="Work Experience" />
                            <WorkExperience experiences={workExperienceData} />
                            <SectionTitle title="Education" />
                            <Education education={educationData} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

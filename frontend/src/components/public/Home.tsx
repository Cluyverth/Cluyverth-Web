
import { FaRegFolder, FaRegUser } from "react-icons/fa";
import { CenteredContainer } from "../comon/CenteredContainer";
import { HeroHeading } from "../comon/HeroHeading";
import { HeroDescription } from "../comon/HeroDescription";
import { ButtonLink } from "../comon/ButtonLink";
import BlueBoldText from "../comon/BoldText";

export function Home() {
    return (
        <main>
            <CenteredContainer>
                <HeroHeading>Hi, I'm Cluyverth W.</HeroHeading>

                <HeroDescription>
                    <BlueBoldText text="Full Stack" /> Developer turning challenges into impactful digital solutions.
                    Skilled in <BlueBoldText text="Python" />, <BlueBoldText text="C#" />, <BlueBoldText text="TypeScript" />, and <BlueBoldText text="JavaScript" />, I fuse technical skills with strategic
                    insight to craft unique digital experiences. Creator of the VS Code theme {' '}
                    <BlueBoldText text="@NightFall-Pines" href="https://github.com/Cluyverth/NightFall-Pines" /> and projects like {' '}
                    <BlueBoldText text="@PROJETO-A" href="https://github.com/Cluyverth/PROJETO-A" />, {' '}
                    <BlueBoldText text="@PROJETO-B" href="https://github.com/Cluyverth/PROJETO-B" />, and {' '}
                    <BlueBoldText text="@PROJETO-C" href="https://github.com/Cluyverth/PROJETO-C" />.{' '}
                </HeroDescription>

                <div className="flex flex-col flex-row justify-center gap-4 px-10">
                    <ButtonLink
                        to="/projects"
                        icon={FaRegFolder}
                        variant="primary"
                        size="lg">
                        View Projects
                    </ButtonLink>

                    <ButtonLink
                        to="/about"
                        icon={FaRegUser}
                        variant="secondary"
                        size="lg"
                    >
                        About Me
                    </ButtonLink>
                </div>
            </CenteredContainer>
        </main>
    );
}
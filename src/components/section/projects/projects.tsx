import { Fragment } from "react/jsx-runtime";
import { getSiteSection } from "../../../data/data";
import { ProjectsSection } from "../../../data/types";
import SkillPill from "../../SkillPill";
import LinkIcon from "../../icons/LinkIcon";

const Projects = () => {
  const projectsData = getSiteSection("projects") as ProjectsSection;
  const projects = projectsData.projects;

  return (
    <div className="projects">
      {projects.map((project, index, self) => {
        return (
          <Fragment key={project.title}>
            <div className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[70%] border border-neutral p-3 rounded">
              <div className="flex flex-row justify-between mb-2">
                <div className="text-secondary text-lg">{project.title}</div>
                <div>
                  <div className="text-accent text-sm opacity-70">
                    {project.type}
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-md opacity-90">{project.description}</p>
              </div>
              <div className="mb-2">
                <div className="flex flex-row flex-wrap">
                  {project.skills.map((skill) => {
                    return <SkillPill key={skill} skill={skill} />;
                  })}
                </div>
              </div>
              <div className="flex flex-row ml-1">
                <div className="mr-4">
                  <a href={project.githubLink} target="_blank">
                    <i className="devicon-github-original text-2xl"></i>
                  </a>
                </div>
                <div className="mt-[2px]">
                  <a href={project.link} target="_blank">
                    <LinkIcon colour="text-accent" width="20px" height="20px" />
                  </a>
                </div>
              </div>
            </div>
            {index !== self.length - 1 && (
              <div className="h-[20px] w-[5px] border-l-2 border-neutral rounded-2xl my-0.5 ml-[1px]"></div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;

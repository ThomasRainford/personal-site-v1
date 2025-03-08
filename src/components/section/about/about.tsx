import { getSiteSection } from "../../../data/data";
import { AboutSection } from "../../../data/types";
import SkillIcon from "./SkillIcon";

const About = () => {
  const aboutData = getSiteSection("about") as AboutSection;
  const skillsHighlights = aboutData.skills.highlights;

  return (
    <div>
      <div className="mb-4">
        <p className="text-accent mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
        <p className="text-accent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitatio.
        </p>
      </div>
      <div>
        <div className="mb-4">
          <p className="text-secondary">My skills highlights:</p>
        </div>
        <div className="flex flex-row flex-wrap">
          {skillsHighlights.map((skill) => {
            return (
              <div className="flex flex-col items-center mr-3 mb-2 border border-neutral rounded-md p-1">
                <SkillIcon skill={skill.toLowerCase()} />
                <p className="text-accent font-bold">{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

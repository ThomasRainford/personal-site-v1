import { getSiteSection } from "../../../data/data";
import { AboutSection } from "../../../data/types";
import { splitAndCapitalize } from "../../../utils/util";
import SkillPill from "../../SkillPill";
import SkillIcon from "./SkillIcon";

const About = () => {
  const aboutData = getSiteSection("about") as AboutSection;
  const skillsHighlights = aboutData.skills.highlights;
  const allSkills = aboutData.skills.all;

  return (
    <div>
      <div className="text-accent mb-4">
        <p className="mb-2">
          I'm a full-stack software engineer who enjoys building scalable,
          high-quality web applications using modern technologies. I thrive in a
          collaborative environment, working closely with developers and
          designers to bring ideas to life.
        </p>
        <p>
          With experience delivering software under tight deadlines, I focus on
          writing clean, efficient code without sacrificing performance. Always
          eager to learn, I enjoy staying up to date with the latest
          technologies and best practices.
        </p>
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <p className="text-secondary">My skills highlights:</p>
        </div>
        <div className="flex flex-row flex-wrap">
          {skillsHighlights.map((skill) => {
            return (
              <div
                key={skill}
                className="flex flex-col items-center mr-3 mb-2 border border-neutral rounded-md p-1"
              >
                <SkillIcon skill={skill.toLowerCase()} />
                <p className="text-accent font-bold text-sm">{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <div className="collapse border border-neutral">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">All Skills:</div>
            <div className="collapse-content">
              {Object.entries(allSkills).map(([key, value]) => {
                return (
                  <div key={key} className="mb-2">
                    <p className="text-accent">{splitAndCapitalize(key)}</p>
                    <div className="flex flex-row flex-wrap">
                      {value.map((skill) => {
                        return (
                          <div key={skill} className="mr-2 mb-2">
                            <SkillPill key={skill} skill={skill} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

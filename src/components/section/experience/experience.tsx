import { Fragment } from "react/jsx-runtime";
import { getSiteSection } from "../../../data/data";
import { ExperienceSection } from "../../../data/types";
import SkillPill from "../../SkillPill";

const Experience = () => {
  const experienceData = getSiteSection("experience") as ExperienceSection;
  const jobs = experienceData.jobs;

  return (
    <div>
      {jobs.map((job, index, self) => {
        return (
          <Fragment key={job.company + job.title}>
            <div className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[70%] border border-neutral p-3 rounded">
              <div className="flex flex-row text-lg mb-2">
                <div className="mr-1">{job.title}</div>
                <div>
                  <a
                    className="hover:underline text-secondary"
                    href={job.link}
                    target="_blank"
                  >
                    @ {job.company}
                  </a>
                </div>
              </div>
              <div className="text-sm text-accent opacity-90 mb-2">
                <div>
                  {job.startDate} - {job.endDate}
                </div>
              </div>
              <div className="mb-3">
                {job.description.map((text) => {
                  return (
                    <p key={text} className="text-sm opacity-90 mb-2">
                      {text}
                    </p>
                  );
                })}
              </div>
              <div>
                <div className="flex flex-row flex-wrap">
                  {job.skills.map((skill) => {
                    return (
                      <div key={skill} className="mr-2 mb-2">
                        <SkillPill key={skill} skill={skill} />
                      </div>
                    );
                  })}
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

export default Experience;

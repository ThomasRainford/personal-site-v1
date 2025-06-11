import { getSiteSections } from "../../../data/data";
import CVButton from "../../CVButton";

const DrawerContent = () => {
  const sections = getSiteSections();

  return (
    <div className="flex flex-col justify-between h-[100%]">
      <div>
        {sections.map((section) => {
          const sectionFormatted =
            section.charAt(0).toUpperCase() + section.slice(1);
          return (
            <div
              key={section}
              className="flex justify-center items-center mb-4"
            >
              <li key={section} className="">
                <div>
                  <a className="text-accent text-center" href={`#${section}`}>
                    <h4 className="text-lg">{sectionFormatted}</h4>
                  </a>
                </div>
              </li>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <div className="mb-8">
          <CVButton />
        </div>
        <div>
          <a href={"https://github.com/ThomasRainford"} target="_blank">
            <i className="devicon-github-original text-4xl text-current"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;

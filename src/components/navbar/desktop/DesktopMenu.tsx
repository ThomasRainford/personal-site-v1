import { getSiteSections } from "../../../data/data";
import CVButton from "../../CVButton";
import ThemeController from "../theme-controller";

const DesktopMenu = () => {
  const sections = getSiteSections();

  return (
    <div className="hidden flex-none sm:block mr-3">
      <ul className="menu menu-md menu-horizontal p-0">
        {/* Navbar menu content */}
        <>
          <div className="flex flex-row">
            {sections.map((section) => {
              const sectionFormatted =
                section.charAt(0).toUpperCase() + section.slice(1);
              return (
                <li key={section}>
                  <a className="text-secondary" href={`#${section}`}>
                    {sectionFormatted}
                  </a>
                </li>
              );
            })}
          </div>
          <div className="divider divider-horizontal m-0"></div>
          <div className="flex flex-row">
            <div className="ml-3 mt-0.5">
              <CVButton sm />
            </div>
            <div className="flex items-center ml-4 pt-0.5">
              <a href={"https://github.com/ThomasRainford"} target="_blank">
                <i className="devicon-github-original text-3xl text-current"></i>
              </a>
            </div>
            <div className="ml-3">
              <ThemeController />
            </div>
          </div>
        </>
      </ul>
    </div>
  );
};

export default DesktopMenu;

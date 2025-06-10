import { getSiteSections } from "../../data/data";
import CVButton from "../CVButton";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const sections = getSiteSections();

  return (
    <div className="drawer drawer-end">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="navbar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu bg-base-200 min-h-full h-[100%] w-60  p-5">
          <div className="mt-12 h-[100%]">
            {/* Sidebar content here */}
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
                          <a
                            className="text-accent text-center"
                            href={`#${section}`}
                          >
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
                    <i className="devicon-github-original text-4xl text-accent"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Layout;

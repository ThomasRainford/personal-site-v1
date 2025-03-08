import { getSiteSections } from "../../data/data";

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
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <div className="mt-12">
            {/* Sidebar content here */}
            {sections.map((section) => {
              const sectionFormatted =
                section.charAt(0).toUpperCase() + section.slice(1);
              return (
                <div className="flex justify-center items-center mb-4">
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
        </ul>
      </div>
    </div>
  );
};

export default Layout;

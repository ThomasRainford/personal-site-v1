import sections from "../../data/sections.json";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  // Load from json file

  return (
    <div className="drawer drawer-end">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="navbar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {sections.map((section) => {
            const sectionFormatted =
              section.charAt(0).toUpperCase() + section.slice(1);
            return (
              <li key={section}>
                <a className="text-accent">{sectionFormatted}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Layout;

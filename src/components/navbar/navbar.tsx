import sections from "../../data/sections.json";

const Navbar = () => {
  return (
    <nav className="navbar w-full">
      <div className="mx-2 flex-1 px-2">
        <h1>T</h1>
      </div>
      <div className="hidden flex-none sm:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
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
      <div className="flex-none sm:hidden">
        <label
          htmlFor="navbar-drawer"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost border-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
            />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;

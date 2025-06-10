import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between w-full py-5">
      <div className="ml-3 px-2">
        <a
          className="btn btn-outline btn-primary text-4xl font-medium px-4 py-4"
          href="/"
        >
          TR
        </a>
      </div>
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;

import DrawerIcon from "../icons/DrawerIcon";
import ThemeController from "./theme-controller";

const MobileMenu = () => {
  return (
    <div className="flex flex-row items-center sm:hidden mr-3">
      <div className="mr-3">
        <div>
          <ThemeController />
        </div>
      </div>
      <div>
        <label
          htmlFor="navbar-drawer"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost border-0"
        >
          <DrawerIcon colour="fill-accent" width="40px" height="40px" />
        </label>
      </div>
    </div>
  );
};

export default MobileMenu;

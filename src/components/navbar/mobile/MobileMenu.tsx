import DrawerIcon from "../../icons/DrawerIcon";
import ThemeController from "../theme-controller";

const MobileMenu = () => {
  return (
    <div className="flex flex-row items-center sm:hidden mr-3">
      <div className="mr-3">
        <ThemeController />
      </div>
      <div>
        <label
          htmlFor="navbar-drawer"
          aria-label="open sidebar"
          className="btn btn-ghost border-0 p-2"
        >
          <DrawerIcon colour="fill-current" width="45px" height="45px" />
        </label>
      </div>
    </div>
  );
};

export default MobileMenu;

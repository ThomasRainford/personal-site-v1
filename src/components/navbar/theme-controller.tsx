import useThemeToggle from "../../hooks/useThemeToggle";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

const ThemeController = () => {
  const [theme, handleToggle] = useThemeToggle({
    key: "theme",
    otherTheme: "light",
    defaultTheme: "forest",
  });

  return (
    <div>
      <label className="swap swap-rotate grid place-items-center">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={handleToggle}
          value={theme}
          style={{ opacity: 0 }} // Removes checkbox style for mobile.
          className="theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
        />
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </label>
    </div>
  );
};

export default ThemeController;

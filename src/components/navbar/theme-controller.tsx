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
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={handleToggle}
          value={theme}
          style={{ opacity: 0 }} // Removes checkbox style for mobile.
          className="bg-base-content row-start-1 col-start-1 col-span-2"
        />
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default ThemeController;

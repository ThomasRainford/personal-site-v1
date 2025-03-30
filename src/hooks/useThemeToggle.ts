import { useEffect, useState } from "react";

interface ThemeToggle {
  key: string;
  otherTheme: string;
  defaultTheme: string;
}

const useThemeToggle = ({
  key,
  otherTheme,
  defaultTheme,
}: ThemeToggle): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [theme, setTheme] = useState(
    window !== undefined
      ? localStorage.getItem(key) ?? defaultTheme
      : defaultTheme
  );

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme(otherTheme);
    } else {
      setTheme(defaultTheme);
    }
  };

  useEffect(() => {
    localStorage.setItem(key, theme!);
    const localTheme = localStorage.getItem(key);
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [key, theme]);

  return [theme, handleToggle];
};

export default useThemeToggle;

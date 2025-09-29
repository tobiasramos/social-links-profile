"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

type AvailableThemes = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange() {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme == "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.themeToggleContianer} onClick={handleThemeChange}>
      {nextThemeIcon[theme]}
      <span>{theme === "dark" ? "Modo Claro" : "Modo Escuro"}</span>
    </div>
  );
}

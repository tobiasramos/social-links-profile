"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

type AvailableThemes = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    setTheme(storageTheme);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  if (!isMounted) return null;

  return (
    <div className={styles.themeToggleContianer} onClick={handleThemeChange}>
      {nextThemeIcon[theme]}
      <span>{theme === "dark" ? "Modo Claro" : "Modo Escuro"}</span>
    </div>
  );
}

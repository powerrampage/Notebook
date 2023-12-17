"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components";
import { ButtonGroup } from "@nextui-org/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import clsx from "clsx";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <ButtonGroup>
      <Button
        className={clsx(
          "!p-2 min-w-fit h-fit bg-transparent text-primary",
          theme === "light" && "!bg-primary text-white"
        )}
        size="sm"
        onClick={() => setTheme("light")}
      >
        <Sun size={20} />
      </Button>
      <Button
        className={clsx(
          "!p-2 min-w-fit h-fit bg-transparent text-primary",
          theme === "dark" && "!bg-primary text-white"
        )}
        size="sm"
        onClick={() => setTheme("dark")}
      >
        <Moon size={20} />
      </Button>
    </ButtonGroup>
  );
};

export default ThemeSwitcher;

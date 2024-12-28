import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  };

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      size="lg"
      color="secondary"
      startContent={<SunIcon className="h-6 w-6" />}
      endContent={<MoonIcon className="h-6 w-6" />}
      onChange={handleThemeChange}
    />
  );
};

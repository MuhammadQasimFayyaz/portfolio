import { GoSun, GoMoon } from "react-icons/go";
import useTheme from "../context/theme";

function DarkModeToggle() {

  const {themeMode, darkMode, lightMode} = useTheme()
  const toggleDarkMode = () => {
    if (themeMode === 'dark') {
      lightMode()
    }
    else {
      darkMode()
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed right-0 top-[50%] translate-y-[-50%] p-2 rounded-l-full border bg-gray-200 dark:bg-gray-800 z-10 outline-0"
    >
      {themeMode === 'dark' ? (
        <GoSun className="text-white h-6 w-6" />
      ) : (
        <GoMoon className="text-[#b923e1] outline-0 h-6 w-6" />
      )}
    </button>
  );
}

export default DarkModeToggle;

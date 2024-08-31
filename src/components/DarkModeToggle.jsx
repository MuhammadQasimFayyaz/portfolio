import { useEffect, useState } from "react"
import { GoSun, GoMoon } from "react-icons/go";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed right-0 top-[50%] translate-y-[-50%] p-2 rounded-l-full border bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-10"
    >
      {darkMode ? (
        <GoMoon className="text-white h-6 w-6" />
      ) : (
        <GoSun className="text-black h-6 w-6" />
      )}
    </button>
  );
}

export default DarkModeToggle;

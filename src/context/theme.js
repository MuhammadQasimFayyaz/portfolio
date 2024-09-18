import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: '',
  lightMode: () => {},
  darkMode: () => {}
})

export default function useTheme() {
  return useContext(ThemeContext)
}
import { createContext, Dispatch, SetStateAction } from "react";
import { defaultTheme } from "../lib/helpers/common";

interface IProp {
  darkMode: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
}
const ThemeContext = createContext<IProp>({
  darkMode: defaultTheme(),
  toggleTheme: () => {},
});

export default ThemeContext;

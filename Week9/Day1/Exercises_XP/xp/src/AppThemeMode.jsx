import "./App.css";
import Main from "./screens/Main";
import Header from "./screens/Header";
import "./AppThemeMode.css";
import { createContext, useState } from "react";

export const ThemeModeContext = createContext();

function AppThemeMode() {
  const [mode, setMode] = useState("light");
  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      <Main />
      <Header />
    </ThemeModeContext.Provider>
  );
}

export default AppThemeMode;


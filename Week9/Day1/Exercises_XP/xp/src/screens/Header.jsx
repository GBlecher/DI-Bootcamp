import { ThemeModeContext } from "../AppThemeMode";
import { useContext } from "react";

const Header = () => {
  const { mode, setMode } = useContext(ThemeModeContext);
  return (
    <div className={mode === "light" ? "light" : "dark"}>
      <button
        onClick={() => setMode((mode) => (mode === "light" ? "dark" : "light"))}
      >
        {mode === "light" ? "dark mode" : "light mode"}
      </button>
    </div>
  );
};
export default Header;
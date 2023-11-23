// ThemeContext.ts
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Theme {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: {
    background: string;
    text: string;
  };
}

const ThemeContext = createContext<Theme | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme: Theme = {
    isDarkMode,
    toggleDarkMode,
    colors: {
      background: isDarkMode ? "black" : "white",
      text: isDarkMode ? "white" : "black",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

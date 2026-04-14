import React, { createContext, useContext, useState, ReactNode } from 'react';

export const APP_THEMES = [
  { accent: '#B57EDC', bg: '#F4F1E1' }, // Original Architecture theme
  { accent: '#FFD60A', bg: '#FFFDE7' }, // Cyber Yellow + Light Yellow
  { accent: '#30B0FF', bg: '#E3F2FD' }, // Sky Blue + Light Blue
  { accent: '#39FF14', bg: '#F1F8E9' }, // Neon Green + Light Green
  { accent: '#FF3366', bg: '#FCE4EC' }, // Hot Pink + Light Pink
  { accent: '#FF5722', bg: '#FBE9E7' }, // Fiery Orange + Light Orange
];

type ThemeContextType = {
  accentColor: string;
  appBgColor: string;
  setTheme: (accentOffset: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  accentColor: APP_THEMES[0].accent,
  appBgColor: APP_THEMES[0].bg,
  setTheme: () => {},
});

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(APP_THEMES[0]);

  const setTheme = (accentOffset: string) => {
    const selected = APP_THEMES.find(t => t.accent === accentOffset) || APP_THEMES[0];
    setCurrentTheme(selected);
  };

  return (
    <ThemeContext.Provider value={{ accentColor: currentTheme.accent, appBgColor: currentTheme.bg, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);

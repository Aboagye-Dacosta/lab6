export interface ThemeTogglerProps {
    theme: "light" | "dark";
    setTheme: (theme: string) => void;
}
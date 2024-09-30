export const defaultTheme = (): boolean => {
  if (window.matchMedia("(prefers-color-scheme: dark)")) return true;
  else return false;
};

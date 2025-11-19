import { createContext, useContext, useMemo, ReactNode } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
  PaletteMode,
} from "@mui/material";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";

const ThemeContext = createContext<{ toggleTheme: () => void }>({
  toggleTheme: () => {},
});

export const useAppTheme = () => useContext(ThemeContext);

interface AppThemeProviderProps {
  children: ReactNode;
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <MuiThemeWrapper>{children}</MuiThemeWrapper>
    </NextThemesProvider>
  );
}

function MuiThemeWrapper({ children }: { children: ReactNode }) {
  const { setTheme, resolvedTheme } = useNextTheme();

  const currentMode = (
    resolvedTheme === "dark" ? "dark" : "light"
  ) as PaletteMode;

  const toggleTheme = () => {
    setTheme(currentMode === "light" ? "dark" : "light");
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: currentMode,
          primary: {
            main: currentMode === "dark" ? "#60a5fa" : "#2563eb",
          },
          secondary: {
            main: currentMode === "dark" ? "#c084fc" : "#9333ea",
          },
          background: {
            default: currentMode === "dark" ? "#0f172a" : "#f8fafc",
            paper: currentMode === "dark" ? "#1e293b" : "#ffffff",
          },
        },
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
          ].join(","),
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor:
                  currentMode === "dark"
                    ? "rgba(15, 23, 42, 0.8)"
                    : "rgba(255, 255, 255, 0.8)",
                color: currentMode === "dark" ? "#f8fafc" : "#0f172a",
                transition: "all 0.3s ease-in-out",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out !important",
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out !important",
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                transition:
                  "color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                transition:
                  "color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
              },
            },
          },
          MuiListItemIcon: {
            styleOverrides: {
              root: {
                transition:
                  "color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
              },
            },
          },
          MuiListItemText: {
            styleOverrides: {
              root: {
                transition:
                  "color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                transition:
                  "color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
              },
            },
          },
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                transition:
                  "color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
              },
            },
          },
        },
      }),
    [currentMode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
